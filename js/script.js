window.addEventListener('load', pageReady);

function pageReady() {
  const red = document.querySelector('#redRng');
  const redText = document.querySelector('#redTxt');

  const green = document.querySelector('#greenRng');
  const greenText = document.querySelector('#greenTxt');

  const blue = document.querySelector('#blueRng');
  const blueText = document.querySelector('#blueTxt');

  function redHandler() {
    redText.placeholder = red.value;
    setBgColor();
  }

  function greenHandler() {
    greenText.placeholder = green.value;
    setBgColor();
  }

  function blueHandler() {
    blueText.placeholder = blue.value;
    setBgColor();
  }

  function setBgColor() {
    const squareColor = document.querySelector('#colorVisualizer');
    squareColor.style.backgroundColor =
      'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
  }

  update();

  setBgColor();

  red.addEventListener('change', update);
  green.addEventListener('change', update);
  blue.addEventListener('change', update);

  function update() {
    redHandler();
    greenHandler();
    blueHandler();
  }
}
