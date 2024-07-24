let numOnDisplay = "";
let operation = "";
let firstNumber = "";
let secondNumber = "";
let amount = "";

const enterNumber = (inputNumber) => {
  if(numOnDisplay.includes('.') && inputNumber === '.') return
  const display = document.getElementById("display");
  amount == 0 ? numOnDisplay+=inputNumber : numOnDisplay = inputNumber
  amount = ""
  if(numOnDisplay == '00') numOnDisplay = '0'
  if(numOnDisplay.length > 1 && numOnDisplay.startsWith('0') && !numOnDisplay.startsWith('0.')) numOnDisplay = numOnDisplay.slice(1,2)
  if(numOnDisplay.startsWith('.')) numOnDisplay = '0.'
  display.innerHTML = numOnDisplay;
}

const reset = () => {
  numOnDisplay = "";
  firstNumber = 0;
  secondNumber = 0;
  operation = "";
  amount = "";
}

const operate = (operator) => {
  if(numOnDisplay.endsWith('.')) return
  const display = document.getElementById("display");
  switch (operator) {
    case "clear":
      reset();
      break;
    case "amount":
      if(!isNaN(firstNumber) && !isNaN(secondNumber) && operation) {
        switch(operation){
          case 'plus': amount = firstNumber+Number(display.innerHTML); break;
          case 'minus': amount = firstNumber-Number(display.innerHTML); break;
          case 'multiply': amount = firstNumber*Number(display.innerHTML); break;
          case 'division': amount = firstNumber/Number(display.innerHTML); break;
          default: break;
        }
      }
      break;
    default:
      firstNumber = Number(display.innerHTML)
      numOnDisplay = ""
      operation = operator;
      return;
  }
  display.innerHTML = amount;
}

const copy = () => {
  if(amount == 0) return
  const display = document.getElementById("display");
  const textToCopy = display.innerHTML;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('คัดลอกผลลัพธ์แล้ว');
  }).catch(err => {
    console.log(err);
  });
}


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName >= '0' && keyName <= '9') {
    enterNumber(String(keyName));
  } else if (keyName === 'Enter') {
    operate("amount");
  } else if (keyName === 'Escape') {
    operate("clear");
  } else if (keyName === '+') {
    operate("plus");
  } else if (keyName === '-') {
    operate("minus");
  } else if (keyName === '*') {
    operate("multiply");
  } else if (keyName === '/') {
    operate("division");
  }
});
