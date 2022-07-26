// Defining variables for all of the passwrd options and the generate button from the HTML
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var symbols = "!!@#$%^&*()";



// The write password function
function writePassword() {
 
  // Defining variables for the input from user's choice
  var len = window.prompt("How many characters would you like your password to be? Password length has to be 8 to 128 characters.");
  //An if statment that lets the user if their password does not meet the lenth requirment 
  if(len > 128 || len < 8){
    window.alert("Your password has to be at least 8 characters and no more than 128.")
    return;
  }
  var addlower = window.prompt("Would you like lower case letters in your password? Y or N?");
  var addupper = window.prompt("Would you like upper case letters to ypur password? Y or N?");
  var addnums = window.prompt("Would you like numbers in your password? Y or N?")
  var addsymbols = window.prompt("Would you like symbols in your password? Y or N?")
  // Defining an empty variable so that when the if statements run the contents of the varibles that defines the password parameters that the user wants used to create their password is inputed into this variable
  var parameters = "";
  
  // If statements that add the contents of the varibles that define the password parameters that the user wants used to create their password
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
  //Defining an empty varibale for the randomized content of the parameters variable
  var pass = "";
  //Defining a length varibale to convert the input from the user for the length of their password from a string to an integer 
  var length = parseInt(len); 
  // A for loop that that randomizes the contents of the parameters variable
  for (var i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * parameters.length);
    pass += parameters[rand];
  }
  //Rentuns a window alert with the contents of the pass varible (which contains the randomized contents of the parameters variable)
  return window.alert("Your password is: " + pass);
  

  

};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
