// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var password = "";
  // console.log(password);

  // var possibleChar = specialChar, lowercaseChar, uppercaseChar, numeralChar;?
  var possibleChar = "";
  var specialChar = " !'#$%^&*@()_-+=`~{|}/[]<>;:.";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = lowercaseChar.toUpperCase;
  var numeralChar = "123456789";

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);