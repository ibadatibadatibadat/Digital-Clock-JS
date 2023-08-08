let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

// console.log(current_time.getHours());
// console.log(current_time.getMinutes());
// console.log(current_time.getSeconds());

setInterval(() => {
  let current_time = new Date();
  hours.innerHTML = (current_time.getHours()<10?"0":"") + current_time.getHours();
  minutes.innerHTML = (current_time.getMinutes()<10?"0":"") + current_time.getMinutes();
  seconds.innerHTML = (current_time.getSeconds()<10?"0":"") + current_time.getSeconds();
}, 1000);
