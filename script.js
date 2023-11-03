// Assignment Code
// debugger;
var document = 
// var generateBtn = ; 
// - when ran node script.js ReferenceError: document is not defined???
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
}
// password length 8-128 characters
// character types:
// lowercase
// uppercase
// numeric
// and/or special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
