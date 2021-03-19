function alertMessage() {
  return alert("Hello");
}
function inputInterger(msg) {
  let number = 0;
  do {
    number = Number(prompt(msg));
  } while (!Number.isInteger(number));
  return number;
}
function creasePlus1(number) {
  return number + 1;
}
function checkTwoNumber(number1, number2) {
  if (number1 > number2) {
    alert(` ${number1} bigger ${number2}`);
  } else alert(`Total of ${number1} and ${number2} = ${number1 + number2}`);
}


function addNumbers() {
  firstNum = 4;
  secondNum = 8;
  result1 = firstNum + secondNum;
  return result1;
}

