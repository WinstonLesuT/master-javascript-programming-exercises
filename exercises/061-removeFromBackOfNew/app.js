function removeFromBackOfNew(arr) {
  // your code here
  console.log(arr.length);
  let fromBackOf = arr.slice(0, arr.length - 1);
  return fromBackOf;
  
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
