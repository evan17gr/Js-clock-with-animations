const secondTick = document.querySelector('.secs');
const minsTick = document.querySelector('.mins');
const hourTick = document.querySelector('.hrs');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondTick.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsTick.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourTick.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
