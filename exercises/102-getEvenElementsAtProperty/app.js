function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0){
      return [];
    }
    const arr = obj[key];
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
      }
    }
  return evenArr;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
