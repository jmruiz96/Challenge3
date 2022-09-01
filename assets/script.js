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

function generatePassword() {
  var wantUppy = confirm("Do you want to include uppercase character?")
  var wantLowy = confirm("Do you want to include lowercase characters?")
  var wantNumbies = confirm("Do you want to include numbers?")
  var specialChars = confirm("Do you want to include special characters")
  var passwordLength = prompt("How long do you want password to be? (8-128)")
    if ((parsInt(passwordLength) <= 8) && (parseInt(passwordLength) >= 128)) {
    
    if (wantUppy) {
      availabeChars = availabeChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (wantLowy) {
      availabeChars = availabeChars + "abcdefghijklmnopqrstuvwxyz"
    }

    if (wantNumbies) {
      availabeChars = availabeChars + "1234567890"
    }

    if (specialChars) {
      availabeChars = availabeChars = "!@#$%^&*()"
    }

    for(var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random()*availableChars.length);
      var randomChars = availableChars[randomIndex];
      completedPassword = completedPassword + randomChars;
    }
  } else{ 
    alert("The length of your password needs to be at least 8 digits and at most 128.")
  }

return completedPassword;
}
generatePassword()