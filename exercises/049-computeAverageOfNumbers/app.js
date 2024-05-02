// Write your function here
function computeAverageOfNumbers (arr){
    if (arr.length === 0) return 0;

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
        
    }
    return (sum / (arr.length))
}
