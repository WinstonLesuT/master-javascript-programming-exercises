function getSmallestElementAtProperty(obj, key) {
    // your code here
  if (!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])) {
    return [];
  }
  let arr = obj[key];
  let min = Infinity;
  arr.forEach(el => {
    if (el < min) {
      min = el;
    }    
  });
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }
  // }
  // return Math.min.apply(null , obj[key]);
return min;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
