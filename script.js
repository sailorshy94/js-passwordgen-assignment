// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var password = "";
  // console.log(password);

  // var possibleChar = specialChar, lowercaseChar, uppercaseChar, numeralChar;?
  // can I come back and consolidate the variables into something more condensed? 
  var possibleChar = "";
  var specialChar = " !'#$%^&*@()_-+=`~{|}/[]<>;:.";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = lowercaseChar.toUpperCase;
  var numeralChar = "123456789";

  var inputLength = 17;
  var hasSpecialChar = false;
  var hasLowercaseChar = false;
  var hasUppercaseChar = false;
  var hasNumeralChar = false;

  // test the application
  for (var i = 0; i < inputLength; i++)
    var random = Math.floor(Math.random() * specialChar.length)
    password += specialChar[random]; 
    
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);