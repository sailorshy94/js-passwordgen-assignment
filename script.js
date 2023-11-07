// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // can I come back and consolidate the variables into something more condensed? 
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:.";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = lowercaseChar.toUpperCase;
  var numeralChar = "123456789";

  var inputLength = 10;
  var hasSpecialChar = false;
  var hasLowercaseChar = true;
  var hasUppercaseChar = false;
  var hasNumeralChar = false;

  // test the application
  for (var i = 0; i < inputLength; i++){
    var random = Math.floor(Math.random() * lowercaseChar.length)
  possibleChar += lowercaseChar[random];
}

console.log(possibleChar);
return possibleChar;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);