// Write your function here
function getElementsLessThan100AtProperty (obj,key) {
    
    if (!obj[key]) return [];
    if (obj[key].length == 0) return [];
    if(!Array.isArray(obj[key])) return [];
    return obj[key].filter((el) => {
        return el < 100;
    })
}