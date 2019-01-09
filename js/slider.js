var slide1 = document.getElementById("s1"),
    slide2 = document.getElementById("s2"),
    slide3 = document.getElementById("s3"),
    slide4 = document.getElementById("s4"),
    slide5 = document.getElementById("s5"),
    control1 = document.getElementById("control1"),
    control2 = document.getElementById("control2"),
    control3 = document.getElementById("control3"),
    control4 = document.getElementById("control4"),
    control5 = document.getElementById("control5");

//var timerId = setInterval(function() {
//}
//}, 2000);

var control = 'control';
var slide = 'slide';
console.log(control);


control1.onfocus = function() {
  slide1.style.zIndex = "-1";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control2.onfocus = function() {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-1";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control3.onfocus = function() {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-1";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-2";
}
control4.onfocus = function() {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-1";
  slide5.style.zIndex = "-2";
}
control5.onfocus = function() {
  slide1.style.zIndex = "-2";
  slide2.style.zIndex = "-2";
  slide3.style.zIndex = "-2";
  slide4.style.zIndex = "-2";
  slide5.style.zIndex = "-1";
}

