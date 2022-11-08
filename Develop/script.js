// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Algorithm to generate password
var generatePassword = function () {
    // var passLength = window.prompt("Type a number to generate the length of the password.");

    var aNumber = Number(window.prompt("Type a number to generate the length of the password.", ""));
    // Checks to see if passLength is a number, then either moves on to the next prompt, or
    // sends a window alert to ensure the user types in a valid number.
    if(isNaN(aNumber)){
        window.alert("Please type in a number.");
        return;
    }

    // var passLowercase = window.prompt("Would you like to include ")

    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
