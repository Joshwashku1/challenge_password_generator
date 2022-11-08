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
    
    // Grab the number of password length.
    var aNumber = Number(window.prompt("Type a number to generate the length of the password.", ""));

    // Checks to see if passLength is a number, then either moves on to the next prompt, or
    // sends a window alert to ensure the user types in a valid number.
    if(isNaN(aNumber)){
        window.alert("Please type in a number.");
        return;
    }

    // Prompts to specify the users preference for characters
    var passLowercase = window.confirm("Would you like your password to have a lowercase letter?");
    var passUppercase = window.confirm("Would you like your password to have an uppercase letter?");
    var passNumeric = window.confirm("Would you like your password to have a number?");
    var passSymbol = window.confirm("Would you like your password to have any symbols?");

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCase = '0123456789';
    const symbolCase = '!@#$%^&*()';

    // Adds the characters to which the user selects
    let passCasePlus = '';
    if(passLowercase){
        passCasePlus += lowerCase;
    } else if(passUppercase) {
        passCasePlus += upperCase;
    } else if(passNumeric) {
        passCasePlus += numberCase;
    } else if(passSymbol) {
        passCasePlus += symbolCase;
    }

    let result = '';

    for(i=0;i<aNumber;i++){
        // Randomly generates a char from the users specifications and length
        // while adding the char to result in each iteration. 
        result += passCasePlus.charAt(Math.floor(Math.random() * passCasePlus.length));
    }

    // return all random characters
    return result;
    

    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
