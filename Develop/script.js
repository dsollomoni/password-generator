// Assignment Code

var lower ="abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword(){
  prompt("How long do you want your password to be? (8-128 charcters)")
  var length = " "; 
  if (length < 8 && length > 128) {
  }
  var r = confirm("Do you want lowercase letters?");
  if (r == true) {
    
  }
}

//var lowerOp 
//var upperOp
//var numberOp
//var specialOp

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
