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

// function numOfCharFromArrays(num1, num2) {
//   return(Math.floor(num1/num2));
// }

// numOfCharFromArrays(length, answerCount);

var picker = Math.floor(length/answerCount);
console.log(picker);

var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var charactersArr = ['!', '@', '$']

var passwordContent = ""; 
if (lowercase === true) {
  // as long as index is less than picker, add a lowercase character to the string and repeat
  // when the counter hits picker, the loop ends
  for (i=0; i<picker; i++) {
    // when you modify a string, you must store it again
  passwordContent = passwordContent.concat(lowercaseArr[Math.floor(Math.random()*lowercaseArr.length)]);
  }
}

if (uppercase === true) {
  for (i=0; i<picker; i++) {
  passwordContent = passwordContent.concat(uppercaseArr[Math.floor(Math.random()*uppercaseArr.length)]);
  };
}

if (numbers === true) {
  for (i=0; i<picker; i++) {
    passwordContent = passwordContent.concat(numbersArr[Math.floor(Math.random()*numbersArr.length)]);
  }
}
if (characters === true) {
  for (i=0; i<picker; i++) {
    passwordContent = passwordContent.concat(charactersArr[Math.floor(Math.random()*charactersArr.length)]);
  }
}
  console.log(passwordContent);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//};
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)