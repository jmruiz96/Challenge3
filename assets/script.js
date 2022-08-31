// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ask if they want upper case -confirm
// // ask if they want lower case -cornfirm
// ask if the want special characters -confirm
// ask if the want numerals -confirm
// ask what the length of the password should be -prompt
//   answer needs to be between 8 and 128 
// after all that verify at least one prompt is chosen
// return completed password 