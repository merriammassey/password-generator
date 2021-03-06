var generateBtn = document.querySelector("#generate");

// declare function to choose criteria and return a string = password
function generatePassword() {
  // determine password length
  var length = prompt('How long do you want the password to be? Pick a number between 8 and 128.')
  if (length < 8 || length > 128 || (isNaN(length))) {
  alert('Choose a number between 8 and 128.');
  return "Try again"
  };

  // determine type of characters
  var lowercase = confirm('Do you want to include lowercase letters?');
  var uppercase = confirm('Do you want to include uppercase letters?');
  var numbers = confirm('Do you want to include numbers?');
  var characters = confirm('Do you want to include special characters?');

  if (lowercase  == false && uppercase  == false && numbers  == false && characters  == false) {
    alert('You must choose at least one type of character.');
    return "Try again"
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

var picker = Math.floor(length/answerCount);

var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var charactersArr = ['!', '@', '$', '#', '&', '*', '%', '+', '^', '(', ')']

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
if (passwordContent.length < length) {
  var difference = length - passwordContent.length;
  for (i=0; i<difference; i++) {
    passwordContent = passwordContent.concat(passwordContent[Math.floor(Math.random()*passwordContent.length)]);
    };
}
// run the Scramble function and return its contents
// returning and running a function in the same line will return the value of that function outside the bigger function
return scramble(passwordContent);
}


// A function to scramble passwordContent
function scramble(passwordContent) {
  var password = "";
  for (i=0; i<passwordContent.length; i++) {
    var index = Math.floor(Math.random()* passwordContent.length);
    // build the new string password by adding a character from a random location
    password += passwordContent.charAt(index);
  }
    return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //select text area with id password
  var passwordText = document.querySelector("#password");
  // set password inside text area
  passwordText.value = password;
}

// Add event listener to generate button. writePassword is called when button is clicked
generateBtn.addEventListener("click", writePassword)