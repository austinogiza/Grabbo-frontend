const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.grabbofertilityclinic.com"

const endpoint = `${host}/api`

export const contactFormURL = `${host}/contact`
