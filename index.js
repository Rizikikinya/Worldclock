function updateTime(cityID, timezone) {
  let city = document.getElementById(cityID);

  let dates = city.querySelector(".dates");
  let time = city.querySelector(".time");
  dates.innerHTML = moment().tz(timezone).format("DD MMMM YYYY");
  time.innerHTML = moment()
    .tz(timezone)
    .format("hh:mm:ss [<small>]A[</small>]");
}
function updateAllCities() {
  updateTime("london", "Europe/London");
  updateTime("paris", "Europe/Paris");
  updateTime("kampala", "Africa/Kampala");
}
updateAllCities();

setInterval(updateAllCities, 1000);

function updateCity(event) {
  let cityTime = event.target.value;

  let cityElement = document.getElementById("cities-container");
  if (!cityTime) {
    cityElement.innerHTML = "";
    return;
  }

  cityElement.innerHTML = `<div class="city-options" >
        <div>
          <h2>${cityTime}</h2>
          <div class="dates">${moment()
            .tz(cityTime)
            .format("DD MMMM YYYY")}</div>
          </div>
          <div class="time">${moment()
            .tz(cityTime)
            .format("hh:mm:ss [<small>]A[</small>]")}</div>
          </div>`;
}
let citiesSelect = document.getElementById("city");
citiesSelect.addEventListener("change", updateCity);
