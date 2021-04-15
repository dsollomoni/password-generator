// Assignment Code
function generatePassword(){
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

var lowerOp = false;  
var upperOp = false;
var numberOp = false;
var specialOp = false;

var random = '';
var randomPass = '';
var length = " ";

  while (length < 8 || length > 128 ) {
    length = prompt("How long do you want your password to be? (8-128 charcters)"); 
    if (length === null){
      break;
    }
  }
  if (length){ 
    if (confirm("Do you want lowercase letters?") == true) {
      random += lower;
      lowerOp = true;
    }

    if(confirm("Do you want uppercase letters?") == true ) {
      random += upper; 
      upperOp = true;
    }

    if(confirm("Do you want numbers?") == true ) {
      random += number; 
      numberOp = true;
    }
    if(confirm("Do you want special characters?") == true){
      random += special;
      specialOp = true; 
    }

    //Checks if all are false
    if (lowerOp && upperOp && numberOp && specialOp == null) {
      alert("you must select one type.")
    }

  } 
    
  
  for(var i = 0; i < length; i++) {
    //Randomizes password
    randomPass += random[Math.floor(Math.random() * random.length)];
    console.log(Math.floor(Math.random() * random.length));
  }
  return randomPass;
  

    
  
}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
