let button = document.querySelectorAll('button');
let screen = document.getElementById('input');

button.forEach(function(element) {
  element.addEventListener('click', function() {
    if(element.value == 'ac') {
      reset();
    } else if (element.value == 'ce') {
      backspace();
    } else if (element.value == "=") {
      calculate();
    } else {
      let val = element.getAttribute("value");
      addToScreen(val);
    }
  });
});


function addToScreen(val) {
  screen.value += val;
}


function backspace() {
  let length = 0;
  let counter = 0;
  for (let i = screen.value.length - 1; i >= 0; i--) {
    counter++;
    if (screen.value[i] == "+" || screen.value[i] == "-" || screen.value[i] == "*" || screen.value[i] == "/") {
      break;
    }
  }
  screen.value = (screen.value.substr(0, screen.value.length - counter));
}


function reset() {
  screen.value = '';
}

function calculate() {
  let cal = screen.value;
  let result = eval(cal);
  screen.value = result;
}