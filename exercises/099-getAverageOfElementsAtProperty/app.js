function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return 0;
}
  let arr = obj[key];
  let counter = 0;

  arr.forEach(e => {
    if (typeof e === "number"){
      counter += e;
    }
  });
return counter / arr.length;
}