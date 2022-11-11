// Array for uppercase letters

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array for lowercase letters

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
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
     10);
  
      if (Number.isNaN(length)) {
        alert("Password length must be a number");
        return null;
        
      }

      if (length < 8) {
        alert("Password must be at least 8 characters long");
        return null;
        
      }

      if (length > 128) {
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

if (
  hasLowerCase === false &&
  hasUpperCase === false &&
  hasNumeric === false &&
  hasSpecial === false 
) {
  
  alert("Must have at lease one character type");
  return null;

}

var passwordCriteria = {
  length: length,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumeric: hasNumeric,
  hasSpecial: hasSpecial,
};

return passwordCriteria;
}

function getRandom(arr) {
 var index = Math.floor(Math.random() * arr.length);
  var element = arr[index];
  return element;
  }

function generatePassword() {
  var options = passwordCriteria();

  var result = [];

  var possible = [];

  var actual = [];

  if (!options) return null;

  if (options.hasSpecial) {
    possible = possible.concat(special);
    actual.push(getRandom(special));
    }
  
    if (options.hasNumeric) {
      possible = possible.concat(numeric);
      actual.push(getRandom(numeric));
    }

    if (options.hasLowerCase) {
      possible = possible.concat(lowerCase);
      actual.push(getRandom(lowerCase));
    }

    if (options.hasUpperCase) {
      possible = possible.concat(upperCase);
      actual.push(getRandom(upperCase));
    }

 for (var i = 0; i < options.length; i++) {
    var possible = getRandom(possible);

    result.push(possible);
 }

     for (var i = 0; i < actual.length; i++) {
    result[i] = actual[i];
  }
  
  return result.join("");  
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
