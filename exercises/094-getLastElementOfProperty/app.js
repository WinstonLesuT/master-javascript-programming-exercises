// Write your function here
const getLastElementOfProperty = (obj, key) => {
    if (!obj[key]) return undefined;
    if (!Array.isArray(obj[key])) return undefined;
    let lastElement = obj[key][obj[key].length - 1];
    return lastElement;
}