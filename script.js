// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // can I come back and consolidate the variables into something more condensed? 
  var password = "password";
  // var possibleChar = "";
  // var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:.";
  // var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  // var uppercaseChar = lowercaseChar.toUpperCase;
  // var numeralChar = "123456789";

  // var inputLength = 10;
  // var hasSpecialChar = false;
  // var hasLowercaseChar = false;
  // var hasUppercaseChar = false;
  // var hasNumeralChar = false;

  // test the application
  // for (var i = 0; i < inputLength; i++)
  //   var random = Math.floor(Math.random() * specialChar.length)
  //   password += specialChar[random]; 
  // output of for loop = all the specialChars at one time with [object HTMLTextAreaElement] before it?????  
  console.log(password);
  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);