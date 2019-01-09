var slide1 = document.getElementById("s1"),
  slide2 = document.getElementById("s2"),
  slide3 = document.getElementById("s3"),
  slide4 = document.getElementById("s4"),
  slide5 = document.getElementById("s5"),
  control1 = document.getElementById("control1"),
  control2 = document.getElementById("control2"),
  control3 = document.getElementById("control3"),
  control4 = document.getElementById("control4"),
  control5 = document.getElementById("control5"),
  controlLeft = document.getElementById("controlLeft"),
  controlRight = document.getElementById("controlRight");

function start() {
  this.control1;
  slide1.style.zIndex = "-1";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
start();
controlRight.onclick = function () {
  if (slide1.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-1";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control2;
  } else if (slide2.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-1";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control3;
  } else if (slide3.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-1";
    slide5.style.zIndex = "-2";
    this.control4;
  } else if (slide4.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-1";
    this.control5;
  } else if (slide5.style.zIndex == "-1") {
    slide1.style.zIndex = "-1";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control1;
  }
}

controlLeft.onclick = function () {
  if (slide1.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-1";
    this.control5;
  } else if (slide2.style.zIndex == "-1") {
    slide1.style.zIndex = "-1";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control1;
  } else if (slide3.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-1";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control2;
  } else if (slide4.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-1";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control3;
  } else if (slide5.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-1";
    slide5.style.zIndex = "-2";
    this.control4;
  }
}

control1.onfocus = function () {
  slide1.style.zIndex = "-1";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control2.onfocus = function () {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-1";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control3.onfocus = function () {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-1";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control4.onfocus = function () {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-1";
  slide5.style.zIndex = "-2";
}
control5.onfocus = function () {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-1";
}

var timerId = setInterval(function () {
  if (slide1.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-1";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control2;
  } else if (slide2.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-1";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control3;
  } else if (slide3.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-1";
    slide5.style.zIndex = "-2";
    this.control4;
  } else if (slide4.style.zIndex == "-1") {
    slide1.style.zIndex = "-2";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-1";
    this.control5;
  } else if (slide5.style.zIndex == "-1") {
    slide1.style.zIndex = "-1";
    slide2.style.zIndex = "-2";
    slide3.style.zIndex = "-2";
    slide4.style.zIndex = "-2";
    slide5.style.zIndex = "-2";
    this.control1;
  }
}, 5000);
