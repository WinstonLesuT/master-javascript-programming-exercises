function getElementsAfter(array, n) {
  // your code here
  let newArr = array.slice(n + 1, array.length);
  console.log(newArr);
  return newArr;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
