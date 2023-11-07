// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ADD CODE HERE
  // can I come back and consolidate the variables into something more condensed? 
  var possibleChar = "";
  var specialChar = "!'#$%^&*@()_-+=`~{|}/[]<>;:.";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeralChar = "123456789";

  // can I assign inputLength a random value? math.floor for number between 8 and 128?
  var inputLength = 15;
  var hasSpecialChar = false;
  var hasLowercaseChar = false;
  var hasUppercaseChar = false;
  var hasNumeralChar = false;

  // test the application
  for (var i = 0; i < inputLength; i++) {
    var random = Math.floor(Math.random() * lowercaseChar.length)
    possibleChar += lowercaseChar[random];
  }

  // if statement to check for user not using at least one char type
  if (!hasSpecialChar && !hasLowercaseChar && !hasUppercaseChar && !hasNumeralChar){
    alert("User must choose at least one character type.");
    return;
  }

  // if (!inputLength > 128){
  //   alert("User has entered too many characters. Please choose between 8 and 128 characters.")
  //   return;
  // }

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