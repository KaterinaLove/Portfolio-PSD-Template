var imgNamber = 1,
  slide = document.getElementById("s1");

if (imgNamber < 5) {
  setInterval(function () {
    slide = document.getElementById("s+'imgNamber'");
    imgNamber++;
  }, 2000);
} else {
  imgNamber = 1;
}
