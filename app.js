let hour = document.getElementById("hour");
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let am_pm = document.getElementById("am_pm");

setInterval(() => {
  let currentdate = new Date();

  hour.innerHTML = currentdate.getHours();
  minute.innerHTML = currentdate.getMinutes();
  second.innerHTML = currentdate.getSeconds();

  if (hour >= 12) {
    am_pm.innerHTML = "PM";
  } else {
    am_pm.innerHTML = "AM";
  }
}, 1000);
