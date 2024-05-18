// Write your function here
function getNthElementOfProperty (obj, key , num) {
    if (typeof obj[key] !== "object") return undefined;
    if (!Array.isArray(obj[key])) return undefined;
    if (num >= obj[key].length) return undefined;
    return obj[key][num];
}