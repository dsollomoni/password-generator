// Assignment Code

var lower ="abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

var lowerOp;  
var upperOp;
var numberOp;
var specialOp;

function generatePassword(){
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
    }

    if(confirm("Do you want uppercase letters?") == true ) {
      random += upper; 
    }

    if(confirm("Do you want numbers?") == true ) {
      random += number; 
    }
    if(confirm("Do you want special characters?") == true){
      random += special; 
    }

    //Checks if all are false
    if (!lowerOp && !upperOp && !numberOp && !specialOp) {
      alert("you must select one type.")
    }
  } 
    
  var random = '';
  var randomPass = '';
  for(var i = 0; i < length; i++) {
    
    randomPass += random[Math.floor(Math.random() * random.length)];
    
  }

  
  

    
  
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
