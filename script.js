// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  var possibleChar = "";
  var password = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:."; 
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"; 
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var numeralChar = "123456789";

  var inputLength = window.prompt("Include how many characters (between 8 to 128)?");
  var invalidLength = "Please try again, insufficient user input.";
  
  if (inputLength < 8){
    alert("Please choose a length of at least 8 characters or more.");
    return invalidLength;
  }
  
  if (inputLength > 128){
    alert("Please choose a length between 8 and 128 characters.");
    return invalidLength;
  }

  var hasSpecialChar = window.confirm("Include special characters?");
  var hasLowercaseChar = window.confirm("Include lowercase characters?");
  var hasUppercaseChar = window.confirm("Include uppercase letters?");
  var hasNumeralChar = window.confirm("Include numeric characters?");
  
  console.log(possibleChar.concat(specialChar));

  if (hasSpecialChar){
    possibleChar = possibleChar.concat(specialChar);
    console.log(possibleChar);
  } 
  
  if (hasLowercaseChar){
    possibleChar = possibleChar.concat(lowercaseChar);
    console.log(possibleChar);
  }

  if (hasUppercaseChar){
    possibleChar = possibleChar.concat(uppercaseChar);
    console.log(possibleChar);
  }

  if (hasNumeralChar){
    possibleChar = possibleChar.concat(numeralChar);
    console.log(possibleChar);
  }

  if (!hasSpecialChar && !hasLowercaseChar && !hasUppercaseChar && !hasNumeralChar){
    alert("User must select at least one character type.")
    return invalidLength;
  }

  for (var i = 0; i < inputLength; i++){
    var random = Math.floor(Math.random() * possibleChar.length);
    password += possibleChar[random];
    console.log(password);
    console.log(random);
  }

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