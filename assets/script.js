// Assignment code here

function generatePassword() {
  //booleans to get password parameters
  var passwordOutput;
  var lowerCaseBoolean;
  var upperCaseBoolean;
  var numbersBoolean;
  var specialCharactersBoolean;
  
  //arrays to merge when creating password
  var lowerCaseCharacters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericCharacters = ["1","2","3","4","5","6","7","8","9","0"];
  var specialCharacters =["!","@","#","$","%","^","&","*","(",")"];

  //returns length of password entered from prompt
  function getLength() {
    let length = window.prompt("Pick a length from 8 to 128 characters");
    return length;
  }
  var passwordLength = getLength();

  //This function asks the series of prompts to get password parameters
  function getAllowedCharacters() {
    lowerCaseBoolean = window.confirm("Does this have lowercase letters?");
    upperCaseBoolean = window.confirm("Does this have uppercase letters?");
    numbersBoolean = window.confirm("Does this have numbers?");
    specialCharactersBoolean = window.confirm(
      "Does this have special characters?"
    );
  }

  //empty array is created for allowed parameters then are merged if they were requested
  function createPassword() {
    let allowedCharacters = [];
    let newPassword = [];
    if (lowerCaseBoolean) {
      allowedCharacters = [...allowedCharacters, ...lowerCaseCharacters];
    }
    else {
      
    }
    if (upperCaseBoolean) {
      allowedCharacters = [...allowedCharacters, ...upperCaseCharacters];
    }
    else {
      
    }
    if (numbersBoolean) {
      allowedCharacters = [...allowedCharacters, ...numericCharacters];
    }
    else {
      
    }
    if (specialCharactersBoolean) {
      allowedCharacters = [...allowedCharacters, ...specialCharacters];
    }
    else {
      
    }

    //safeguard for if all parameters are declined
    if (allowedCharacters.length != 0){
    //newPassword is the final array with randomized letters from allowed characters
    for (let i=0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * allowedCharacters.length);
      newPassword.push(allowedCharacters[randomNumber]);
    }
    //join method combines array indexes into a single string without commas
    passwordOutput = newPassword.join("");
    }
    else {
      passwordOutput = "No criteria entered, try generating again!";
    }

  }

  //first part of if statement checks if length prompt was answered with a number within range
  //if answered correctly, creates password
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a value from 8 to 128");
    passwordOutput = "Try generating again";
  } else {
    getAllowedCharacters();
    createPassword();
  }
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
