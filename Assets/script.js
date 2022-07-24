// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var symbols = "!!@#$%^&*()";



// Write password to the #password input
function writePassword() {
 

  var len = window.prompt("How many characters would you like your password to be? 8 to 128.");
  var addlower = window.prompt("Would you like lower case letters in your password? Y or N?");
  var addupper = window.prompt("Would you like upper case letters to ypur password? Y or N?");
  var addnums = window.prompt("Would you like numbers in your password? Y or N?")
  var addsymbols = window.prompt("Would you like symbols in your password? Y or N?")
  var parameters = "";
  

  if (addlower === "Y") {
    parameters = parameters + lowerCase;   
  }
  if (addupper === "Y") {
    parameters = parameters + upperCase;
  }
  if (addnums === "Y") {
    parameters = parameters + nums;
  }
  if (addsymbols === "Y"){
    parameters = parameters + symbols
  }
  var pass = "";
  var length = parseInt(len); 
  for (var i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * parameters.length);
    pass += parameters[rand];
  }

  return window.alert("Your password is: " + pass);
  

  

};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
