function countSquare(number) {
  return number * number;
}

function areaCirle(radius) {
  return Math.PI * radius * radius;
}
function countFactorial(number) {
  let result = 1;
  for (var i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
function checkNumber(number1) {
  if (typeof number1 == "number") return true;
  return false;
}
function reverseArray(arrayLength) {
  let array = [];
  for (let i = 0; i < arrayLength; i++) {
    array[i] = `${makeid(1)}`;
  }
  return array;
}
function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function countElement(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] == element)
    count += 1;
  }
  if(count == 0)
  return -1;

  
  return count;
}
