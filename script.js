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
  if (val == '.') {
    if (screen.value.length === 0) {
      screen.value += val;
    } else {
      for (let i = screen.value.length - 1; i >= 0; i--) {
        let check = screen.value[i];
        if (check == '+' || check == '-' || check == '*' || check == '/') {
          screen.value += val;
          break;
        } else if (check == '.') {
          screen.value += '';
          break;
        } else if (i == 0 && check != ".") {
          screen.value += val;
        }
      }
    }
  } else {
    let lastDigit = screen.value[screen.value.length - 1];

    if (lastDigit == "+" || lastDigit == "-" || lastDigit == "*" || lastDigit == "/" || lastDigit == ".") {
     if (val != '+' && val != '-' && val != '*' && val != '/' && val != '.') {
      screen.value += val;  
    } else {
      screen.value = screen.value.slice(0, screen.value.length - 1) + val;
    }
  } 
  else {
    screen.value += val;
  }
 }
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
  let val = screen.value;
  let lastDigit, result;

  if (val == "" || val == "undefined" || val == ".") {
    screen.value = "";
  } else {
    let lastDigit = val[val.length - 1];
    while(lastDigit == "+" || lastDigit == "-" || lastDigit == "*" || lastDigit == "/" || lastDigit == ".") {
      val = val.slice(0, val.length - 1);
      lastDigit = val[val.length - 1];
    }
    screen.value = evaluate(val);
  }
}

let evaluate = (val) => {
  return eval(val);
};