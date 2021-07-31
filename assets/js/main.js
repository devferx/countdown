const $dateInput = document.getElementById("date-input");
const $modal = document.getElementById("modal");

const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2], b[3], b[4]);
}

const setMinDateInput = () => {
  const today = new Date();
  const dateLimit = new Date(today.getTime() + 5 * 60 * 1000);

  const YYYY = dateLimit.getFullYear();
  const DD = formatNumber(dateLimit.getDate());
  const MM = formatNumber(dateLimit.getMonth() + 1);
  const hh = formatNumber(dateLimit.getHours());
  const mm = formatNumber(dateLimit.getMinutes());

  $dateInput.setAttribute("min", `${YYYY}-${MM}-${DD}T${hh}:${mm}`);
};

function setCountdown(date1) {
  setInterval(function () {
    const date2 = new Date();

    const diff = date1.getTime() - date2.getTime();

    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMinutes = Math.floor((diff / 1000 / 60) % 60);
    const diffSeconds = Math.floor((diff / 1000) % 60);

    $days.innerHTML = formatNumber(diffDays);
    $hours.innerHTML = formatNumber(diffHours);
    $minutes.innerHTML = formatNumber(diffMinutes);
    $seconds.innerHTML = formatNumber(diffSeconds);
  }, 1000);
}

$dateInput.addEventListener("change", function () {
  setMinDateInput();
});

$modal.addEventListener("submit", (ev) => {
  ev.preventDefault();
  $modal.classList.add("hide");
  setCountdown(parseDate($dateInput.value));
});

setMinDateInput();
