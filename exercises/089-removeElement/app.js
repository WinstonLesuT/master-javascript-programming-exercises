// Write your function here
function removeElement (arr, discarder) {
    let newArr = arr.filter((element) => element !== discarder);
    return newArr;
    
}