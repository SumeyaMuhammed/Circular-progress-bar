let percentage_blue = document.querySelector(".percentage-blue");
let blue = document.querySelector(".blue");
let percentage_green = document.querySelector(".percentage-green");
let green = document.querySelector(".green");
let percentage_red = document.querySelector(".percentage-red");
let red = document.querySelector(".red");

var blue_start = 0;
// The blue bar will end with 90%
var green_start = 0;
// The green bar will end with 100%
var red_start = 0;
// The red bar will end with 78%

setInterval(() => {
  if (blue_start <= 90) {
    blue.style.background = `conic-gradient(blue 0deg, blue ${
      blue_start * 3.6
    }deg, white 0deg)`;
    percentage_blue.textContent = `${blue_start}%`;
    blue_start++;
  }

  if (green_start <= 100) {
    green.style.background = `conic-gradient(green 0deg, green ${
      green_start * 3.6
    }deg, white 0deg)`;
    percentage_green.textContent = `${green_start}%`;
    green_start++;
  }

  if (red_start <= 78) {
    red.style.background = `conic-gradient(red 0deg, red ${
      red_start * 3.6
    }deg, white 0deg)`;
    percentage_red.textContent = `${red_start}%`;
    red_start++;
  }
}, 40);
