// Array for uppercase letters

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array for lowercase letters

var lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z"];
// Added parameters for length, and number of characters using if statements

// Array of special characters.

var special = ["!","@","#","$","%","^","&","*","+","=","(",")","~","`","<",">",":",";","{","}","[","]"];

// Array for numbers

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8,", "9"];

// made password criteria
function passwordCriteria() {
  var length = parseInt(
    prompt("How many characters would you like?"),
     8
      );

      if (Number.isNan(length)) {
        alert("Password length must be a number");
        return null;
        
      }

      if (pass.length < 8) {
        alert("Password must be at least 8 characters long");
        return null;
        
      }

      if (pass.length > 128) {
        alert("Password length must be no more than 128 characters long");
        return null;
        
      }
//  made confirm messages
      var hasSpecial = confirm(
        "Click OK to confirm special characters. "
      );

      var hasNumeric = confirm(
        "Click OK to confirm numbers."
      );
      
      var hasLowerCase = confirm(
        "Click OK to confirm lower case letters."
      );

      var hasUpperCase = confirm(
        "Click OK to confirm upper case letters."
      );




  
}

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
