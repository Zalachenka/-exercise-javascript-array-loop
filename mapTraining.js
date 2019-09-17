const floatingNumbers = ['-2.2', '4.4', '-6.6', '8.8', '3.14'];
function isFloorNumber(number) {
  return Math.floor(number);
}
const integers = floatingNumbers.map(isFloorNumber); // returns the integer part of the number

function isAbsolute(number) {
  return Math.abs(number);
}
const absoluteNumbers = floatingNumbers.map(isAbsolute);
console.log(absoluteNumbers);
