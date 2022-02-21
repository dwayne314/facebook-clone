export function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const militaryHours = date.getHours();
  const isNight = militaryHours > 12;
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = isNight ? militaryHours - 12 : militaryHours;
  const period = isNight ? "PM" : "AM";

  const minutes = date.getMinutes();

  return `${month} ${day} at ${hours}:${minutes} ${period}`;
}
