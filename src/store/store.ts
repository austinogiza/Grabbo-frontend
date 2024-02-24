import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./reducer/authReducer"
import { combineReducers } from "redux"

type MergedState = {
  histories?: {
    [key: string]: any
  }
}
const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers here
})
export const grabboStore = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
})

export type AppState = ReturnType<typeof grabboStore.getState>
export type AppDispatch = typeof grabboStore.dispatch
