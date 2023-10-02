const yesButton = document.getElementById("yesButton");
const image = document.getElementById("changeimg");
const popword = document.getElementById("popword");
const nobutton = document.getElementById("movingButton");
const next = document.getElementById("nextButton");
const h1 = document.getElementById("myh1");
const h2 = document.getElementById("myh2");

function changeImage() {
  const currSrc = image.getAttribute("src");

  const gif1 = "./images/giphy.gif";
  const gif2 = "./images/giphy (1).gif";

  if (currSrc === gif1) {
    image.setAttribute("src", gif2);
  } else {
    image.setAttribute("src", gif1);
  }

  image.style.height = "400px";

  yesButton.style.display = "none";
  nobutton.style.display = "none";
  popword.textContent = "wihhh mau dong diaa";
  next.style.display = "block";
  h1.style.display = "none";
  h2.style.display = "none";
}

yesButton.addEventListener("click", changeImage);
