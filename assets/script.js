// Assignment Code
// var generateBtn = document.querySelector("#generate");

// declare function to choose criteria 
// function generatePassword() {
  // determine password length
  var length = prompt('How long do you want the password to be? Pick a number between 8 and 128.')
  if (length < 8 || length > 128 || (isNaN(length))) {
  alert('Choose a number between 8 and 128.')
  // return 
  };

  // determine type of characters
  var lowercase = confirm('Do you want to include lowercase letters?');
  var uppercase = confirm('Do you want to include uppercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var characters = confirm('Do you want to include special characters?');

  if (lowercase  == false && uppercase  == false && numbers  == false && characters  == false) {
    alert('You must choose at least one of the following options.')
    // return /* or call function again */
};

//determine number of characters to select from each array
var answerCount = 0;
if (lowercase === true) {
  answerCount++;
}
if (uppercase === true) {
  answerCount++;
}
if (numbers === true) {
  answerCount++;
}
if (characters === true) {
  answerCount++;
}

function numOfCharFromArrays(num1, num2) {
  return(Math.floor(num1/num2));
}

numOfCharFromArrays(length, answerCount);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//};
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)