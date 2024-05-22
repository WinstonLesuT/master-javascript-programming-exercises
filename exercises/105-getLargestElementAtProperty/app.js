function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return [];
  }
  let max = - Infinity;
  let arr=obj[key];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
  // return Math.max.apply(null, obj[key]);
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
