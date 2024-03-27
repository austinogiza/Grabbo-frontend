const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://api.grabbofertilityclinic.com"

const endpoint = `${host}/api`

const contactFormURL = `${host}/contact`
