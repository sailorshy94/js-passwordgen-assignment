// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:."; 
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var numeralChar = "123456789"; 
  var charCombo = specialChar.concat(lowercaseChar, uppercaseChar, numeralChar);
  // if I console.log(charCombo) = specialChar (0), lowercaseChar (1), ...

  // var inputLength = Math.floor((Math.random() * 128) + 8); - do not need this for acceptance criteria; user must be able to input the length they want
  var inputLength = window.prompt("Include how many characters (between 8 to 128)?");
  var hasSpecialChar = window.confirm("Include special characters?");
  var noSpecial = charCombo.slice(0);
  var hasLowercaseChar = window.confirm("Include lowercase characters?");
  var noLowercase = charCombo.slice(1);
  var hasUppercaseChar = window.confirm("Include uppercase letters?");
  var noUppercase = charCombo.slice(2);
  var hasNumeralChar = window.confirm("Include numeric characters?");
  var noNumeral = charCombo.slice(3);
  var invalidLength = "Please try again, insufficient user input.";

  for (var i = 0; i < inputLength; i++){
    var random = Math.floor(Math.random() * charCombo.length)
    possibleChar += charCombo[random];
  }

  if (inputLength < 8){
    alert("Please choose a length of at least 8 characters or more.");
    return invalidLength;
  }

  if (inputLength > 128){
    alert("Please choose a length between 8 and 128 characters.");
    return invalidLength;
  }
  
  // problem is with possibleChar, if I decline 3 but accept one char type, still logs the other 3 anyway
  if (hasSpecialChar){
    console.log(possibleChar);
    return possibleChar;
  } else {
    console.log(noSpecial);
  }
  
  if (hasLowercaseChar){
    console.log(possibleChar);
    return possibleChar;
  } else {
    console.log(noLowercase);
  }

  if (hasUppercaseChar){
    console.log(possibleChar);
    return possibleChar;
  } else {
    console.log(noUppercase);
  }

  if (hasNumeralChar){
    console.log(possibleChar);
    return possibleChar;
  } else {
    console.log(noNumeral);
  }

  if (!hasSpecialChar && !hasLowercaseChar && !hasUppercaseChar && !hasNumeralChar){
    alert("User must select at least one character type.")
    return;
  }
  // need to change the way this is set up
  // if (hasSpecialChar || hasLowercaseChar || hasUppercaseChar || hasNumeralChar) {
  //   console.log(possibleChar);
  //   return possibleChar;
  // } else {
  //   alert("User must select at least one character type.");
  //   return;
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);