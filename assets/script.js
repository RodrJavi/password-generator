// Assignment code here

function generatePassword() {
  var passwordOutput;
  var lowerCaseBoolean;
  var upperCaseBoolean;
  var numbersBoolean;
  var specialCharactersBoolean;
  var lowerCaseCharacters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericCharacters = ["1","2","3","4","5","6","7","8","9","0"];
  var specialCharacters =["!","@","#","$","%","^","&","*","(",")"];
  function getLength() {
    let length = window.prompt("Pick a length from 8 to 128 characters");
    return length;
  }
  var passwordLength = getLength();
  function getAllowedCharacters() {
    lowerCaseBoolean = window.confirm("Does this have lowercase letters?");
    upperCaseBoolean = window.confirm("Does this have uppercase letters?");
    numbersBoolean = window.confirm("Does this have numbers?");
    specialCharactersBoolean = window.confirm(
      "Does this have special characters?"
    );
  }
  function createPassword() {
    let allowedCharacters = [];
    if (lowerCaseBoolean) {
      allowedCharacters.push(lowerCaseCharacters);
    }
    else {
      return;
    }
    if (upperCaseBoolean) {
      allowedCharacters.push(upperCaseCharacters);
    }
    else {
      return;
    }
    if (numbersBoolean) {
      allowedCharacters.push(numericCharacters);
    }
    else {
      return;
    }
    if (specialCharactersBoolean) {
      allowedCharacters.push(specialCharacters);
    }
    else {
      return;
    }


    passwordOutput = allowedCharacters;

  }

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a value from 8 to 128");
    passwordOutput = "Try generating again";
  } else {
    getAllowedCharacters();
    createPassword();
  }
  console.log(lowerCaseBoolean, upperCaseBoolean, numbersBoolean, specialCharactersBoolean);
  console.log(lowerCaseCharacters);
  console.log(upperCaseCharacters);
  return passwordOutput;
}

// Get references to the #generate element
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
