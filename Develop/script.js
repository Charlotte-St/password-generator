// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Password generation

function generatePassword(){
  //character sets
  var lowerCase; 
  var upperCase;
  var numberList;
  var specialChar;
  var lowerSelection;
  var upperSelection;
  var numberSelection;
  var specialSelection;
  var passwordCharSet = [];
  var passwordComponents = [];

  // confirm generate password
  if (window.confirm("Would you like to generate a password?")){
    text1 = "Follow the prompts to generate a password"
  }
  else {text1 = "You pressed 'Cancel'./n Press the 'Generate Password' button to restart the process."}
  // select password length

  // confirm use lower case char --> add random character from lowerCase to passwordComponents; add lowerCase to passwordCharSet
// confirm use upper case char --> add random character from upperCase to passwordComponents; add upperCase to passwordCharSet
// confirm use numbers --> add random character from numberLost to passwordComponents; add numberList to passwordCharSet
//confirm use special characters --> 
// error if no to lower, upper, numbers, and special chars --> break and have user restart
// add additional characters to password --> iterate over loop to add random character from array to passwordComponents
// iterate over loop to concatenate values from passwordComponents into password and return value; Randomize before concatenating? 
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
