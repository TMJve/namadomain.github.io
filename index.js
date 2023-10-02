const movingButton = document.getElementById('movingButton');

movingButton.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = movingButton.offsetWidth;
  const buttonHeight = movingButton.offsetHeight;

  // Reduce the maximum X and Y values to keep the button within frame
  const maxX = screenWidth - buttonWidth - 10;
  const maxY = screenHeight - buttonHeight - 10;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set the new button position
  movingButton.style.left = `${randomX}px`;
  movingButton.style.top = `${randomY}px`;

  const kalimat = [
    "cie gabisaa",
    "pencet aja trusssss",
    "gamau coba yang AYOKK aja?",
    "gacapek mencet muluu? :D",
    "ohhh gituu",
    "p p p p pencet yang ijo aja mbak",
    "hmmmmmmmmmmmm gitu",
    "o_o",
    "blehbleh gacapek mencet trus?"
  ];

  function printRandomMessage() {
    const randomIdx = Math.floor(Math.random() * kalimat.length);
    const kalimatRand = kalimat[randomIdx];

    const outputElement = document.getElementById("popword");
    outputElement.textContent = kalimatRand;
  }
  printRandomMessage();
});

// Update button position when the device orientation changes
window.addEventListener("orientationchange", () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = movingButton.offsetWidth;
  const buttonHeight = movingButton.offsetHeight;

  const maxX = screenWidth - buttonWidth - 10;
  const maxY = screenHeight - buttonHeight - 10;

  const currentX = parseInt(movingButton.style.left, 10);
  const currentY = parseInt(movingButton.style.top, 10);

  // Check if the button is out of frame and readjust if necessary
  if (currentX > maxX) {
    movingButton.style.left = `${maxX}px`;
  }
  if (currentY > maxY) {
    movingButton.style.top = `${maxY}px`;
  }
});