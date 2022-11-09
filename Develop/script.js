// Assignment Code
var generateBtn = document.querySelector("#generate");

// Catch an undefine variable to reference if an object is undefined
var undefinedText = window.undefined;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Checks to see if the return is a resulted string or an undefined result
  if(password !== undefinedText) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }

}

// Algorithm to generate password
var generatePassword = function () {
    
    // Grab the number of password length.
    var aNumber = Number(window.prompt("Type a number to generate the length of the password.", ""));

    // Checks to see if passLength is a number, then either moves on to the next prompt, or
    // sends a window alert to ensure the user types in a valid number.
    if(isNaN(aNumber) || aNumber === 0){
        window.alert("Please type in a number.");
        return;
    }

    // Alert defining the proceeding prompts
    window.alert("Next you will be prompted with preferences for your password. " +
    "Please click 'OK' to confirm YES, and 'Cancel' to confirm NO." )

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
    let atLeastOne = [];
   
    console.log(atLeastOne);
    console.log(aNumber);
 

    if(passLowercase){
        passCasePlus += lowerCase;
        atLeastOne.push(lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
    }
    if(passUppercase) {
        passCasePlus += upperCase;
        atLeastOne.push(upperCase.charAt(Math.floor(Math.random() * upperCase.length)));

    }
    if(passNumeric) {
        passCasePlus += numberCase;
        atLeastOne.push(numberCase.charAt(Math.floor(Math.random() * numberCase.length)));

    }
    if(passSymbol) {
        passCasePlus += symbolCase;
        atLeastOne.push(symbolCase.charAt(Math.floor(Math.random() * symbolCase.length)));

    }

    
    let result = '';

    for(i=0;i<aNumber;i++){

        var index = Math.floor(Math.random() * atLeastOne.length);
        //Check to see if the array length exists,
        //if length exists generate the at least one preference criteria
        if(atLeastOne.length>=i || i === 3 && atLeastOne.length>=1){
            result += atLeastOne[index];
            atLeastOne.splice(index,1);
        } else  {
            // Randomly generates a char from the users specifications and length
            // while adding the char to result in each iteration. 
            result += passCasePlus.charAt(Math.floor(Math.random() * passCasePlus.length));
        }
    }

    // return all random characters
    return result;
    

    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
