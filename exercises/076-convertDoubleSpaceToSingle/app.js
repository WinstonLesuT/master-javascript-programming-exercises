function convertDoubleSpaceToSingle(str) {
    // your code here
    let frase = str;
    let array = frase.split("  ");
    let string = array.join(" ");
    return string;

}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
