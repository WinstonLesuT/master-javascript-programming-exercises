function computePerimeterOfACircle(radius) {
  // your code here
  let x = Math.PI;
  let perimeter = 2 * x * radius;
  return perimeter;

}

let output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
