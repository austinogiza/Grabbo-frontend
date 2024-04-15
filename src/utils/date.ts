export const reviewConvertDate = (dateStr: any) => {
  const dateObj = new Date(dateStr)
  const timeZone = dateObj
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2]
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]

  const day = days[dateObj.getDay()]
  const date = String(dateObj.getDate()).padStart(2, "0")
  const month = months[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  const hours = String(dateObj.getHours()).padStart(2, "0")
  const minutes = String(dateObj.getMinutes()).padStart(2, "0")

  const readableDate = `${day}, ${date} ${month} ${year} ${hours}:${minutes} ${timeZone}`

  return readableDate
}
