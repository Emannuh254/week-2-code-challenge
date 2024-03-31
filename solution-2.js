
//isNaN() is a built-in JavaScript function that stands for "is Not a Number."//
// It is used to determine whether a value is NaN (Not a Number) or can be converted to a valid number.
//parseInt(prompt("Enter a number:")) is used to prompt the user for input and convert the entered string into an integer.
function createArray(start, end) {   
    const result = [];
    if (start <= end) {  
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;
}
console.log(createArray(-40, 25));

