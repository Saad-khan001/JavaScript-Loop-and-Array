// Task 2: Find an Element's Index


// Arrays

// for Loop

// if Statement


// Create a program that finds the index of a specific element in an array.


// ["Ali", "Ahmed", "Sara", "Fatima"]


// Sara


// Sara found at index 2



// If the element does not exist:

// Element not found





// Array
let names = ["Ali", "Ahmed", "Sara", "Fatima"];

// Element to find
let elementToFind = "Sara";

// Variable to check if the element is found
let found = false;

// Loop through the array
for (let i = 0; i < names.length; i++) {

    // Check if the current element matches
    if (names[i] === elementToFind) {

        console.log(`${elementToFind} found at index ${i}`);

        found = true;

        break;
    }
}

// If the element was not found
if (found === false) {
    console.log("Element not found");
}