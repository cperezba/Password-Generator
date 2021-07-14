// Global Variables
var generateBtn = document.querySelector("#generate");

const alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphaLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];

var passwordAccumulator = '';

var passwordSize = window.prompt("How long would you like your password? (8-128)");
var passwordSizeNumber = parseInt(passwordSize);
// var cAlphaU = window.confirm("Would you like uppercase characters?");
// var cAlpha5L = window.confirm("Would you like lowercase characters?");
// var cNumbers = window.confirm("Would you like numeric characters?");
// var cSymbols = window.confirm("Would you like special characters?");

///////////
function generatePassword() {

  for (i = 0; i < passwordSizeNumber; i++) {
    var randomAlphaUpper = alphaUpperCase[Math.floor(Math.random() * 26)];
    console.log(randomAlphaUpper);
    var randomAlphaLower = alphaLowerCase[Math.floor(Math.random() * 26)];
    console.log(randomAlphaLower);
    var randomNumber = numbers[Math.floor(Math.random() * 10)];
    console.log(randomNumber);
    var randomSymbol = symbols[Math.floor(Math.random() * 11)];
    console.log(randomSymbol);
    passwordAccumulator += randomAlphaUpper;
    passwordAccumulator += randomAlphaLower;
    passwordAccumulator += randomNumber;
    passwordAccumulator += randomSymbol;


  }

  return passwordAccumulator;














  //   // 


  //   // passwordAccumulator.push(randomAlphaUpper);


  // return passwordAccumulator;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







//Questions:
//Why is the above function written as var password = generatePassword();?
//How does one choose random variables?
//How does one add them in pre-selected amounts?
//How does the '+=' operator work?

















//Try #2
// function generatePassword (cLength, cAlphaU, cAlphaL, cNumbers, cSymbols) {

// for (i = 0; i < cLength; i++) {
//     characterAggregator = alphaU[Math.floor(Math.random() * 26)];
//     characterAggregator += characterAggregator;
// }
//     return characterAggregator;
// };




//Try #1
// function writePassword() {

//     generatePassword();


//     var password = generatePassword(cLength, cAlphaU, cAlphaL, cNumbers, cSymbols) {
//         for (i = 0; i < cLength; i++) {
//             let generatedPassword;
//             alphaU[Math.floor(Math.random() * 26)];

//             password += alphaU;
//         }

//         return generatedPassword;
// };
// }

// var passwordText = document.querySelector("#password");

// passwordText.value = password;




// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// console.log(Math.floor(Math.random() * 26));