// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Password generation

function generatePassword(){
  //character sets
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numberList = ['0','1','2','3','4','5','6','7','8','9'];
  var specialChar = ['!','#','$','%','&','(',')','*','+','-','/','<','=','>','?','@','[',']','{','}','|'];
  var passwordLength = 0;
  var passwordCharSet = [];
  var passwordComponents = [];

//Functions to select character types

function lowerCaseChoice(){
  if (confirm("Should the password include lower case letters?")==true) {
    passwordCharSet.push(lowerCase);
    var randomChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      console.log(randomChar)
    }
    return passwordComponents.push(randomChar);
  }


  // confirm generate password
if (confirm("Would you like to generate a password?")==true){
  let passwordLength = Number((prompt("How long should the password be?\n Min: 8 characters\n Max: 128 characters")))
  if (passwordLength < 8 || passwordLength > 128){
    alert("The password must be between 8 and 128 characters. Please restart the password generation process.")
  } 
  else {alert( passwordLength + " character password requested.")}
  lowerCaseChoice();
  alert(passwordComponents[0])
}
else {
 alert("You have chosen not to create a password.")
};
  // select password length

  // confirm use lower case char --> add random character from lowerCase to passwordComponents; add lowerCase to passwordCharSet
// confirm use upper case char --> add random character from upperCase to passwordComponents; add upperCase to passwordCharSet
// confirm use numbers --> add random character from numberLost to passwordComponents; add numberList to passwordCharSet
//confirm use special characters (provide list of special char)--> add random character from specialChar to passwordComponents; add specialChar to passwordCharSet 
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
