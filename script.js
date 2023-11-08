// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // where does the confirm window go?
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:."; confirm("Include special characters?");
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; confirm("Include lowercase characters?");
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; confirm("Include uppercase letters?");
  var numeralChar = "123456789"; confirm("Include numeric characters?");
  var charCombo = specialChar.concat(lowercaseChar, uppercaseChar, numeralChar);

  var inputLength = Math.floor((Math.random() * 128) + 8);
  var hasSpecialChar = true;
  var hasLowercaseChar = true;
  var hasUppercaseChar = true;
  var hasNumeralChar = true;

  for (var i = 0; i < inputLength; i++){
    var random = Math.floor(Math.random() * charCombo.length)
    possibleChar += charCombo[random];
  }

  // need to change the way this is set up
  if (hasSpecialChar || hasLowercaseChar || hasUppercaseChar || hasNumeralChar) {
    console.log(possibleChar);
    return possibleChar;
  } else {
    alert("User must select at least one character type.");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);