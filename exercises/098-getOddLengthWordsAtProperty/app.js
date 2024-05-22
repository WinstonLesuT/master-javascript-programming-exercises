// Write your function here
const getOddLengthWordsAtProperty = (obj,key) => {
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    let newArr = [];
    obj[key].forEach(e => {
        if (e.length % 2 > 0){
            newArr.push(e);
        }
    });
    return newArr;
    // return obj[key].filter((str) => {
    //     return (str.length % 2 > 0)});
    
}