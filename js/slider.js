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

control1.onfocus = function() {
//  if ()
  control1.focus();
  slide1.style.zIndex = "-1";
  
}
control2.onfocus = function() {
  slide2.style.zIndex = "-1";
}
control3.onfocus = function() {
  slide3.style.zIndex = "-1";
}
control4.onfocus = function() {
  slide4.style.zIndex = "-1";
}
control5.onfocus = function() {
  slide5.style.zIndex = "-1";
}

