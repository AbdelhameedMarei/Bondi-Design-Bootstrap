// Scroll To UP Button
let btn = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 850) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//////////////////////////////////////////////////

//Nice Scroll Plugin
$(document).ready(function () {
  $("html").niceScroll({
    cursorwidth: "12px",
    cursorcolor: "#33d1cc",
    autohidemode: true,
    zindex: 9999,
    mousescrollstep: 100,
  });
});

////////////////////////////////////////////////////

//Current Year in Section Footer
let theYear = document.querySelector(".theyear");
let dateNow = new Date();
theYear.textContent = dateNow.getFullYear(); //Get Year Now
