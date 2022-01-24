// Question: Write a function that will reverse every word in a given string and return the new string. 
// Every word should be reversed but the string as a whole should not be reversed. 
// And DO NOT use array.reverse() method

function reversed_word_not_string(original_str) {
    reversed_string = ""; // Made empty string for reversed string
    reversed_word = ""; // Made empty word string for each word
    myArray = original_str.split(" "); // Made array having each word using split method for non word characters

    for (let i = 0; i < myArray.length; i++) { // loop through each word
        for (let j = myArray[i].length-1; j > -1; j--) { // loop through letters in word
            reversed_word += myArray[i][j] // reversed word
        }
        reversed_string += reversed_word // add reversed word to string
        reversed_string += " " // add space after word
        reversed_word = "" // reset reversed word
    }
    
    //Print out to show change
    console.log("Original String: " + original_str)
    console.log("Reversed String: " + reversed_string)
    console.log()
}

//reversed_word_not_string("moth")
reversed_word_not_string("This is a string")
reversed_word_not_string("Apples are good! What are you doing? Adam is great")