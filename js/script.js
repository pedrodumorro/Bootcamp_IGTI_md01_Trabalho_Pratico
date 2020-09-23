window.addEventListener('load', pageReady);

function pageReady() {
  const colors = [
    red = { name: 'red', elRanger: null, elValue: null },
    green = { name: 'green', elRanger: null, elValue: null },
    blue = { name: 'blue', elRanger: null, elValue: null }
  ];

  const squareColor = document.querySelector('#colorVisualizer');

  for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    color.elRanger = document.querySelector(`#${color.name}Rng`);
    color.elValue = document.querySelector(`#${color.name}Txt`);

    color.elValue.placeholder = color.elRanger.value;

    color.elRanger.addEventListener('input', updateValue);
  }

  function updateValue(e) {
    let colorArr;

    switch (e.target.name) {
      case 'red': colorArr = 0; break;
      case 'green': colorArr = 1; break;
      case 'blue': colorArr = 2; break;
      default: console.log('Something went wrong'); break;
    }

    colors[colorArr].elValue.placeholder = colors[colorArr].elRanger.value;

    const red = colors[0].elRanger.value
    const green = colors[1].elRanger.value
    const blue = colors[2].elRanger.value

    squareColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}
