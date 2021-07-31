const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");

const date1 = new Date(2021, 12, 25);

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

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
