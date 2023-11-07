// Assignment Code
// debugger;
// var document = 
// var generateBtn = ; 
// - when ran node script.js ReferenceError: document is not defined??? - there is not a value for #generate! via MDN

var generateBtn = document.querySelector("#generate");

var possible = generatePassword;

function generatePassword() {
  // ADD CODE HERE  
  var specialChar = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
  var numericChar = "0123456789";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = lowercase.toUpperCase();
  var possibleChars = "";

  var inputLength = 16;
  var hasSpecialChar = false;
  var hasnumericChar = false;
  var hasLowercaseChar = false;
  var hasUppercaseChar = false;
  // var userChoice = true;
// need to do Housekeeping here?
  // for (var i = 0; i < specialChar.length; i++){
  //   console.log(specialChar[i]);
  // }

  // for (var i = 0; i < numericChar.length; i++){
  //   console.log(numericChar[i]);
  // }

  // for (var i = 0; i < lowercase.length; i++){
  //   console.log(lowercase[i]);
  // }

  // for (var i = 0; i < uppercase.length; i++){
  //   console.log(uppercase[i]);
  // }

  // return;
  // while (selectingChoice) {
  //   var userChoice = prompt("");
  // }
}

// password length 8-128 characters
// if, else statement?? If passwordLength is between 8 to 128 characters( <= ???? ) then it will generate a password, else it will not generate a password
// character types:
// lowercase
// uppercase
// numeric
// and/or special characters

// basically want to tell the js to run when generate pwd button pushed and to select between 8 to 128 characters randomly from the lists of character types

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var input = prompt("Would you like to include special characters?");
  // var input = prompt("Would you like to include numbers?");
  // var input = prompt("Would you like to include lowercase letters?");
  // var input = prompt("Would you like to include uppercase letters?");
  // var userChoice = true;


  passwordText.value = password;

  // if (userChoice === true) {
  //   var random = Math.floor(Math.random() * possible.length);
  //   password = possible[random];
  //   console.log(random.specialChar);
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
