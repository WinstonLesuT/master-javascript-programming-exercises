// Write your function here

const keep = (arr, element) => {
    let newArr = [];
    arr.filter((el) => {if (el === element) {
        newArr.push(el);
    }})
    return newArr;
} 
