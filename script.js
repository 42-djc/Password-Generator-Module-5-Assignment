// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// code to concatenate multiple arrays into a built array

let bigArray = [];

// bigArray.concat(exampleArray);

// Function to prompt user for password options
function getPasswordOptions() {
  characterLength = parseInt(prompt("How many characters do you want your password to be? (10-64 characters)"));
  if(isNaN(characterLength) || characterLength < 10 || characterLength > 64) {
    alert("Character length has to be a number between 10 and 64 digits. Please try again.");
    return false;}
    if (confirm("Would you like to include LOWERCASE LETTERS in the password?")) {
      bigArray = bigArray.concat(lowerCasedCharacters);
    console.log(bigArray);
    }
    if (confirm("Would you like to include UPPERCASE LETTERS in the password?")) {
      bigArray = bigArray.concat(upperCasedCharacters);
    console.log(bigArray);
    }
    if (confirm("Would you like to include NUMERICAL CHARACTERS in the password?")) {
      bigArray = bigArray.concat( numericCharacters);
    console.log(bigArray);
    }
    if (confirm("Would you like to include SPECIAL CHARACTERS in the password?")) {
      bigArray = bigArray.concat(specialCharacters);
    console.log(bigArray);
    }
    if (bigArray.length == 0) {
      alert("At least one type of character should be selected. Please try again.");
    return false;}
    }




//useful math function from Dane
//let randomIndex = Math.floor(Math.random()*arrayName.length)

// Function for getting a random element from an array
function getRandom(arr) {

}



// Function to generate password with user input
function generatePassword() {
  let practicePassword = "";
  for (let i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random()*bigArray.length);
    
    practicePassword = practicePassword + bigArray[randomIndex];
    
  } 

  return practicePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log(password);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);