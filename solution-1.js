//The map method returns a new array with the results 
//of calling the provided function on every element in the array.

//split('') method is used to convert the string into an array of 
//characters allowing to iterate over each character individually.
//calllback function checks if the character is uppercase using char === char.toUpperCase().
// If the character is uppercase, it converts it to lowercase using char.toLowerCase(), and vice versa.
//join('') method is used to convert the array of modified characters back into a string.
 // Split the string into an array of characters, map over each character
    // and swap its case, then join the characters back into a string


function swapCase(strng) {
   
    const swappedString = strng.split('').map(char => {
        
        if (char === char.toUpperCase()) {
            
            return char.toLowerCase();
        } else {
            
            return char.toUpperCase();
        }
    }).join('');


    console.log("Swapped case string:", swappedString);

    
    return swappedString;
}

swapCase("I love MORINGA");
