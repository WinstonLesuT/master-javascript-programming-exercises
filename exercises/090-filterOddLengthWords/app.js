function filterOddLengthWords(words) {
    // your code here
    let oddWords = words.filter((word) => word.length % 2 > 0);
    return oddWords;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
