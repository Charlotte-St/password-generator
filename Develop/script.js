// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Password generation

function generatePassword(){
  if (window.confirm("Would you like to generate a password?")){
    text1 = "Follow the prompts to generate a password"
  }
  else {text1 = "You pressed 'Cancel'./n Press the 'Generate Password' button to restart the process."}
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
