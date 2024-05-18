// Write your function here
function getFirstElementOfProperty (obj, key){
    if (typeof obj[key] !== "object" || !Array.isArray(obj[key])) {
        return undefined;
    }
    let firstElement = obj[key][0];
    return firstElement;
}