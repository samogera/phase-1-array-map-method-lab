 // Function to convert the first letter of a string to uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, capitalizeFirstLetter);
}

// Function to convert each tutorial name to title case
function titleCased() {
  return tutorials.map(toTitleCase);
}
 const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

console.log(titleCased());
