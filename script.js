// Assignment Code
// debugger;
// var document = 
// var generateBtn = ; 
// - when ran node script.js ReferenceError: document is not defined??? - there is not a value for #generate! via MDN

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
  var number = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = console.log(lowercase.toUpperCase);
}
// password length 8-128 characters
// character types:
// lowercase
// uppercase
// numeric
// and/or special characters

// Write password to the #password input - what does this mean????
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //,password); ????

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
