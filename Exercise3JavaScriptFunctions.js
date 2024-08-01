// Function to add numbers from an array using the reduce method
function addNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Function to find the maximum number from provided arguments
function findMaxNumber(...args) {
  return Math.max(...args);
}

// Function to add only the numbers from a mixed array, converting valid strings to numbers
function addOnlyNumbers(arr) {
  return arr.reduce((sum, item) => {
    const number = parseFloat(item);
    return sum + (isNaN(number) ? 0 : number); // Add only if it's a valid number
  }, 0);
}

// Function to extract all digits from a string and concatenate them
function getDigits(str) {
  const matches = str.match(/\d/g); // Find all digits in the string
  return matches ? matches.join('') : ''; // Join them or return an empty string if no digits found
}

// Function to reverse a given string
function reverseString(str) {
  return str.split('').reverse().join(''); // Split the string into an array, reverse it, and join back
}

// Function to get the current date in a specific format
function getCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
}
