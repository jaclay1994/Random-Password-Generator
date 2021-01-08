// Assignment Code
var generateBtn = document.querySelector("#generate");
var getStuff = document.querySelector("#Your-Secure-Password")
var passwordText = document.querySelector("#password")


//Variables
var length = 32
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWUXYZ1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordGen = ""
function writePassword() {
  var passwordLength = prompt("How many characters do you want in this passord? (8 to 128 characters)")
  if (passwordLength < 8 || passwordLength > 128) {
    writePassword();
  }

  var confirmSymbols = confirm("Do you want symbols in your password?");

  if (confirmSymbols == false) {

    charset = charset.replace(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~","");

  }

  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");

  if (confirmUpperCase == false) {

    charset = charset.replace("ABCDEFGHIJKLMNOPQRSTUVWUXYZ","");

  }

  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");

  if (confirmLowerCase == false) {

    charset = charset.replace("abcdefghijklmnopqrstuvwxyz","");

  }

  var confirmNumbers = confirm("Do you want numbers in your password?");

  if (confirmNumbers == false) {

    charset = charset.replace("1234567890","");

  }

//Password Text is passed in box.
  var password = generatePassword();
  passwordText.value = password;

}
function generatePassword() {

  for (var i = 0, n = charset.length; i < length; ++i ) {
    passwordGen += charset.charAt(Math.floor(Math.random()* n));
    return passwordGen
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
