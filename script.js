// Assignment Code
var generateBtn = document.querySelector("#generate");
var getStuff = document.querySelector("#Your-Secure-Password")

function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWUXYZ1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  passwordText.value = password;

  



  
  


//for (i = 0; i < characters.length; i++) {
  //result += characters.charAt(Math.floor(Math.random() * charactersLength));
//}

  
}

function getRandomSymbol() {
  const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(writePassword)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
