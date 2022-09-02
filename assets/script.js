// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ask if they want upper case -confirm
// // ask if they want lower case -cornfirm
// ask if the want special characters -confirm
// ask if the want numerals -confirm
// ask what the length of the password should be -prompt
//   answer needs to be between 8 and 128 
// after all that verify at least one prompt is chosen
// return completed password 

function generatePassword() {
    var availableChars = "";
    var completedPassword = "";
    // var forsureChars = "";
  // var wantUppy = confirm("Do you want to include uppercase character?")
  // var wantLowy = confirm("Do you want to include lowercase characters?")
  // var wantNumbies = confirm("Do you want to include numbers?")
  // var specialChars = confirm("Do you want to include special characters")
 
  
  var passwordLength = prompt("How long do you want password to be? (8-128)");

  
    if ((parseInt(passwordLength) >= 8) && (parseInt(passwordLength) <= 128)) {

    } else{ 
      alert("The length of your password needs to be at least 8 digits and at most 128 digits.");
    }

      var wantUppy = confirm("Do you want to include uppercase character?")
  var wantLowy = confirm("Do you want to include lowercase characters?")
  var wantNumbies = confirm("Do you want to include numbers?")
  var specialChars = confirm("Do you want to include special characters")
 
    
    if (wantUppy) {
      availableChars = availableChars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // forsureChars = forsureChars + getRandom(availableChars);
    }

    if (wantLowy) {
      availableChars = availableChars + "abcdefghijklmnopqrstuvwxyz";
      // forsureChars = forsureChars + getRandom(availableChars);
    }

    if (wantNumbies) {
      availableChars = availableChars + "1234567890";
      // forsureChars = forsureChars + getRandom(availableChars);
    }

    if (specialChars) {
      availableChars = availableChars + "!@#$%^&*()";
      // forsureChars = forsureChars + getRandom(availableChars);
    }

    // if ((!wantUppy) && (!wantLowy) && (!wantNumbies) && (!specialChars)) {
    //   alert("Come on, you have to choose one. Try again");
    // }
    // add condition that one must be selected



    for(var i = 0; i < parseInt(passwordLength); i++) {
      // var randomIndex = Math.floor(Math.random()*availableChars.length);
      // var randomChars = availableChars[randomIndex];
      completedPassword = completedPassword + getRandom(availableChars);

      function getRandom(str) {
        var randomIndex = Math.floor(Math.random()*str.length)
        var randomChar = str.charAt(randomIndex)
        return randomChar;

      }
    }

    return completedPassword;

  // } else{ 
  //   alert("The length of your password needs to be at least 8 digits and at most 128 digits.")
  // }
}
// generatePassword()
generateBtn.addEventListener("click", writePassword);