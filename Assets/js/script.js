// Global Variables
var generateBtn = document.querySelector("#generate");

const alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphaLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];



function generatePassword() {
  var aggregatedVariables = [];
  var passwordAccumulator = [];


  //Establish password length
  var passwordSize = parseInt(window.prompt("How long would you like your password? (8-128)"));
  console.log(passwordSize);
  if (passwordSize < 8 || passwordSize > 128) {
    return window.alert("Password must be within 8 and 128 characters!");
  }

  //Establish Uppercase
  var uChoiceAlUpper = window.confirm("Would you like uppercase characters?");
  if (uChoiceAlUpper) {
    aggregatedVariables = [...alphaUpperCase];
  }

  //Establish Lowercase
  var uChoiceAlLower = window.confirm("Would you like lowercase characters?");
  if (uChoiceAlLower) {
    aggregatedVariables = [...aggregatedVariables, ...alphaLowerCase];
  }

  //Establish Numbers
  var uChoiceNumbers = window.confirm("Would you like numeric characters?");
  if (uChoiceNumbers) {
    aggregatedVariables = [...aggregatedVariables, ...numbers]
  }

  //Establish Symbols
  var uChoiceSymbols = window.confirm("Would you like special characters?");
  if (uChoiceSymbols) {
    aggregatedVariables = [...aggregatedVariables, ...symbols]
    console.log(aggregatedVariables);
  }

  if (!uChoiceAlUpper && !uChoiceAlLower && !uChoiceNumbers && !uChoiceSymbols) {
    return window.alert("Password cannot be null! Choose at least one set of characters to be used in password.");
  } else {
    for (i = 0; i < passwordSize; i++) {
      passwordAccumulator += aggregatedVariables[Math.floor(Math.random() * aggregatedVariables.length)];
    }
    console.log(passwordAccumulator);
    return passwordAccumulator;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);