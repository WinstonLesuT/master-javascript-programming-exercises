function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    let n1 = num1 % 2;
    let n2 = num2 % 2;
    if (num1 < 9 && num2 < 9 && 
        (n1 === 0 || n2 === 0)) 
        return true;
        else return false;
}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
