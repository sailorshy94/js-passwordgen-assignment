// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // can I come back and consolidate the variables into something more condensed? 
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:."; confirm("Include special characters?");
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; confirm("Include lowercase characters?");
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; confirm("Include uppercase letters?");
  var numeralChar = "123456789"; confirm("Include numeric characters?");

  // can I assign inputLength a random value? math.floor for number between 8 and 128?
  // <=128, >=8???
  // current inputLength var is causing 10 of each char to input into window
  var inputLength = 10;
  var hasSpecialChar = true;
  var hasLowercaseChar = true;
  var hasUppercaseChar = true;
  var hasNumeralChar = true;

  //  for loops for each variable, can I combine??
  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * specialChar.length)
    possibleChar += specialChar[random];
  }

  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * lowercaseChar.length)
    possibleChar += lowercaseChar[random];
  }

  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * uppercaseChar.length)
    possibleChar += uppercaseChar[random];
  }

  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * numeralChar.length)
    possibleChar += numeralChar[random];
  }

  

  if (hasSpecialChar || hasLowercaseChar || hasUppercaseChar || hasNumeralChar) {
    console.log(possibleChar);
    return possibleChar;
  } else {
    alert("User must select at least one character type.");
    return;
  }
}
// if (!inputLength > 128){
//   alert("User has entered too many characters. Please choose between 8 and 128 characters.")
//   return;
// }
// ???????????????




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);