function getElementsUpTo(array, n) {
  // your code here
  let elementsUpTo = array.slice(0, n);
  console.log(elementsUpTo);
  return elementsUpTo;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
