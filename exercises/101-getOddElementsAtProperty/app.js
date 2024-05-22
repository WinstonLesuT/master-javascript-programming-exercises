function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return [];
  }
  
  let oddArr = [];
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 > 0) {
      oddArr.push(obj[key][i]);
    }
  }
  return oddArr;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
