function getProperty(obj, key) {
  // your code here
  return obj[key];
}
let videoGame = {
    type: 'action'
  };

console.log(getProperty(videoGame,'type'));
