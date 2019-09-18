const floatingNumbers = ['-2.2', '4.4', '-6.6', '8.8', '3.14'];
const isNegative = floatingNumbers.filter(function(x) {
  return x < 0 && x > -5;
});
console.log(isNegative);
