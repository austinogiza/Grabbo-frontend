import axios from "axios"
import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
} from "./actionsTypes"

export const authStart = (loading: boolean) => {
  return {
    type: AUTH_START,
    loading: loading,
  }
}

export const authSuccess = (token: any) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
  }
}

export const authFail = (error: any) => {
  return {
    type: AUTH_FAIL,
    error: error,
  }
}

export const authLogout = () => {
  localStorage.removeItem("delaColinaToken")
  localStorage.removeItem("_hjid")
  localStorage.removeItem("delaColinaExpirationDate")

  localStorage.clear()
  return {
    type: AUTH_LOGOUT,
  }
}

export const checkAuthTimeOut = (expirationTime: any) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(authLogout())
    }, expirationTime + 7 * 24 * 60 * 60 * 1000)
  }
}

export const authLogin = (email?: string, password?: string) => {
  return (dispatch: any) => {
    dispatch(authStart(true))

    // axios
    //   .post(loginURL, { email, password })
    //   .then((res) => {
    //     const token = res.data.key
    //     // Create an expiration date 7 days from now
    //     const expirationDate = new Date(
    //       new Date().getTime() + 7 * 24 * 60 * 60 * 1000
    //     )
    //     // Convert the expiration date to an ISO string before storing
    //     localStorage.setItem("delaColinaToken", token)

    //     localStorage.setItem(
    //       "delaColinaExpirationDate",
    //       expirationDate.toISOString()
    //     )

    //     dispatch(authSuccess(token))
    //     dispatch(checkAuthTimeOut(3600 * 1000))
    //     dispatch(authStart(false))
    //   })
    //   .catch((err) => {
    //     console.log("delacolinaError", err.response.data)
    //     dispatch(authFail(err.response.data[0]))
    //     dispatch(authStart(false))
    //   })
  }
}

export const authCheckState = () => {
  return (dispatch: any) => {
    dispatch(authStart(true))
    const token = localStorage.getItem("delaColinaToken")
    const expirationDateString = localStorage.getItem(
      "delaColinaExpirationDate"
    )

    if (!token) {
      dispatch(authLogout())
      dispatch(authStart(false))
      dispatch(authSuccess(null))
      return
    }

    if (!expirationDateString) {
      dispatch(authLogout())
      dispatch(authSuccess(null))
      dispatch(authStart(false))
      return
    }

    const expirationDate = new Date(expirationDateString)
    if (expirationDate <= new Date()) {
      dispatch(authLogout())
      dispatch(authStart(false))
      dispatch(authSuccess(null))
    } else {
      dispatch(authSuccess(token))
      dispatch(
        checkAuthTimeOut(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      )
      dispatch(authStart(false))
    }
  }
}
