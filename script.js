// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // where does the confirm window go?
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:."; 
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var numeralChar = "123456789"; 
  var charCombo = specialChar.concat(lowercaseChar, uppercaseChar, numeralChar);

  // users need the option to select the character length from between 8 to 128
  // var inputLength = Math.floor((Math.random() * 128) + 8); - do not need this for acceptance criteria; user must be able to input the length they want
  // will need parameters for too short vs too long
  // need to assign the variables here window.confirm & remove the hard coding of everything below
  var inputLength = window.prompt("Include how many characters (between 8 to 128)?");
  var hasSpecialChar = window.confirm("Include special characters?");
  var hasLowercaseChar = window.confirm("Include lowercase characters?");
  var hasUppercaseChar = window.confirm("Include uppercase letters?");
  var hasNumeralChar = window.confirm("Include numeric characters?");
  var invalidLength = "Please try again, insufficient user input.";

  for (var i = 0; i < inputLength; i++){
    var random = Math.floor(Math.random() * charCombo.length)
    possibleChar += charCombo[random];
  }

  if (inputLength < 8){
    alert("Please choose a length of at least 8 characters or more.")
    return invalidLength;
  }

  if (inputLength > 128){
    alert("Please choose a length between 8 and 128 characters.");
    return invalidLength;
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