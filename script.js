let button = document.querySelectorAll('button');
let screen = document.getElementById('input');

button.forEach(function(element) {
  element.addEventListener('click', function() {
    if(element.value == 'ac') {
      reset();
    } else if (element.value == 'ce') {
      backspace();
    } else if (element.value == "=") {
      equalTo();
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

function equalTo() {
  let lastDigit = screen.value[screen.value.length - 1];
  let result;
  console.log(lastDigit);
  console.log(lastDigit == '+');
  if (lastDigit == "+" || lastDigit == "-" || lastDigit == "*" || lastDigit == "/" || lastDigit == ".") {
    result = evaluate(screen.value.slice(0, screen.value.length - 1));
  } else {
    result = evaluate(screen.value);
  }
  screen.value = result;
}

let evaluate = (val) => {
  return eval(val);
}