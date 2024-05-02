function doubleSquareRootOf(num) {
  // your code here
  let squareRoot = Math.sqrt (num);
  let double = squareRoot * 2;
  return double;
}

let output = doubleSquareRootOf(121);
console.log(output); // --> 22
