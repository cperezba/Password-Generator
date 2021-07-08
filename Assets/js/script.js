// Assignment Code
var generateBtn = document.querySelector("#generate");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";







// var upperCaseCharacters = lowerCaseCharacters.toUpperCase();
// console.log(lowerCaseCharacters.toUpperCase());
// console.log(upperCaseCharacters)




console.log(Math.floor(Math.random() * 26));



// Write password to the #password input
// var password = generatePassword();
var passwordText = document.querySelector("#password");
var temp = ' ';

function writePassword() {
var length = window.prompt("How long would you like your password?");

for (var i = 0; i < length; i++) {
var generate = alpha[Math.floor(Math.random() * 26)]
password += generate;

}

console.log(password);


passwordText.value = password;

}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
