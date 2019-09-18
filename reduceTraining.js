const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.reduce(function(max, n) {
  if (n > max) {
    return n;
  } else {
    return max;
  }
}, 0);
console.log(result);
