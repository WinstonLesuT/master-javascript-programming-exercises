function countCharacter(str, char) {
    // your code here
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char)
            counter ++;
    }
    return counter;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
