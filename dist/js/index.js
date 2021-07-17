const body = document.querySelector('body');
const logo = document.querySelector("#logo");
const city1 = document.querySelector("#city-1");
const city2 = document.querySelector("#city-2");

window.addEventListener("mousemove", (e) => {

  logo.style.left = -e.offsetX / 5 + "px";
  logo.style.marginTop = +e.offsetY / 16 + "px";

  city2.style.backgroundPositionX = -e.offsetX / 6 + "px";
  city2.style.backgroundPositionY = +e.offsetY / 16 + "px";
    
  city1.style.backgroundPositionX = -e.offsetX / 8 + "px";
  city1.style.backgroundPositionY = +e.offsetY / 16 + "px";
  
});

