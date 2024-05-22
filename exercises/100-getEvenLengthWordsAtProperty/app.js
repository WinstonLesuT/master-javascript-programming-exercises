function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return [];
  }

    let arr = obj[key];
    let newArray = []

    arr.forEach(e => {
      if (e.length % 2 === 0) {
        newArray.push(e);
      }
    });

    return newArray;

  // return obj[key].filter((str) => {
  //   return (str.length % 2 == 0);
  // })
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
