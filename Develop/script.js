//Base file provided by Northwestern Coding Bootcamp
// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Password generation

function generatePassword(){

 //Character sets & password settings
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
    passwordCharSet.push(...lowerCase);
    var randomChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      console.log(randomChar)
      return passwordComponents.push(randomChar);
    }
  };

function upperCaseChoice(){
  if (confirm("Should the password include upper case letters?")==true) {
    passwordCharSet.push(...upperCase);
    var randomChar = upperCase[Math.floor(Math.random() * upperCase.length)];
      console.log(randomChar)
      return passwordComponents.push(randomChar);
      }
    };

  function numberChoice(){
    if (confirm("Should the password include numbers?")==true) {
      passwordCharSet.push(...numberList);
      var randomChar = numberList[Math.floor(Math.random() * numberList.length)];
        console.log(randomChar)
        return passwordComponents.push(randomChar);
      }
    };

function specialChoice(){
    if (confirm("Should the password include special characters?")==true) {
      passwordCharSet.push(...specialChar);
      var randomChar = specialChar[Math.floor(Math.random() * specialChar.length)];
        console.log(randomChar)
        return passwordComponents.push(randomChar);
        }
      };

  // Functions to assemble password

function additionalChars() {
    for (let i = 0; i = (passwordLength - passwordComponents.length); i++){
      var randomChar = passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
      console.log(randomChar);
      passwordComponents.push(randomChar);
    };
  };

  function passwordMixer(passwordComponents){
    for (let i = passwordComponents.length - 1; i > 0; i--){
      var position = Math.floor(Math.random() * (i + 1));
      [passwordComponents[i], passwordComponents[position]] = [passwordComponents[position], passwordComponents[i]];
    }
    return passwordComponents;
  };

  // Password generation prompts
if (confirm("Would you like to generate a password?")==true){
  passwordLength = Number((prompt("How long should the password be?\n Min: 8 characters\n Max: 128 characters")))
  if (passwordLength < 8 || passwordLength > 128){
    alert("The password must be between 8 and 128 characters. Please restart the password generation process.");
    return null;
  }
  else if (isNaN(passwordLength) == true){
    alert("The value entered must be a number. Please restart the password generation process.");
    return null;
  };
}
else {
  alert("You have chosen not to generate a password.");
  return null;
};

  lowerCaseChoice();
  upperCaseChoice();
  numberChoice();
  specialChoice();
  var additionalCharLength = (passwordLength - passwordComponents.length);
  additionalChars();
  passwordMixer(passwordComponents);
  var assembledPassword = passwordComponents.join("");
  //alert("Your password: " + assembledPassword);
  return assembledPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
