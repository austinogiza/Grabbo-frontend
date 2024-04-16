const host =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://api.grabbofertilityclinic.com"

const endpoint = `${host}/api`

export const contactFormURL = `${endpoint}/contact/`
