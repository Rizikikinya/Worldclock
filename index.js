function updateCity(cityID, timezone) {
  let city = document.getElementById(cityID);

  let dates = city.querySelector(".dates");
  let time = city.querySelector(".time");
  dates.innerHTML = moment().tz(timezone).format("DD MMMM YYYY");
  time.innerHTML = moment()
    .tz(timezone)
    .format("hh:mm:ss [<small>]A[</small>]");
}
function updateAllCities() {
  updateCity("london", "Europe/London");
  updateCity("lagos", "Africa/Lagos");
  updateCity("kampala", "Africa/kampala");
}
updateAllCities();

setInterval(updateAllCities, 1000);
