// Assignment code here

function generatePassword() {
  var passwordOutput;
  var lowerCaseBoolean;
  var upperCaseBoolean;
  var numbersBoolean;
  var specialCharactersBoolean;
  var lowerCaseCharacters = ["a", "b"];
  function getLength() {
    let length = window.prompt("Pick a length from 8 to 128 characters");
    return length;
  }
  var passwordLength = getLength();

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a value from 8 to 128");
    passwordOutput = "Try generating again";
  } else {
    lowerCaseBoolean = window.confirm("Does this have lowercase letters?");
    upperCaseBoolean = window.confirm("Does this have uppercase letters?");
    numbersBoolean = window.confirm("Does this have numbers?");
    specialCharactersBoolean = window.confirm(
      "Does this have special characters?"
    );
  }
  console.log(lowerCase, upperCase, numbers, specialCharacters);
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
