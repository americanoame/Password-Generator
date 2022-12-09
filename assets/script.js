// Globle varibles

// declating al the evruthing that i ned t accss trouhut he code
var specialCharArray = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "-", "=", "+"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "l", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"]
var possibleCharaters = [];
var guarantedCharacters = [];
var chosenLetter = "";
var finalPassword = "";
var numberOfCharacter = "";

// genaratr passqord fucncon 

function generatePassword () {
  console.log("generatePassword");
  
                                                 
  numberOfCharacter = window.prompt("enter the number of caracters");
  console.log("numberOfCharacter", numberOfCharacter);
  if (numberOfCharacter < 8) {
    alert("Number of Character has to be 8 or more");

    return;
  };

  if(numberOfCharacter > 128) {
    alert("Number of Character has to be 128 or less") 

    return
  };

  var includeUpperOrNot = window.confirm("do you wanna include uppercase");
  console.log("includeUpperOrNot ", includeUpperOrNot);
  if (includeUpperOrNot == true) {
    possibleCharaters = possibleCharaters.concat(upperCaseArray);

    var randomChar = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    guarantedCharacters.push(randomChar);
  }
  console.log(guarantedCharacters);
  console.log(possibleCharaters);
  
  var includeLowerOrNot = window.confirm("do you wanna inclued lowercase");
  console.log("includeLowerOrNot ", includeLowerOrNot );
  if (includeLowerOrNot == true) {
    possibleCharaters = possibleCharaters.concat(lowerCaseArray) 

    var randomChar = lowerCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    guarantedCharacters.push(randomChar);
  }
  console.log(possibleCharaters)

  var includeSpecialOrNot = window.confirm("do you wanna inclued special caracters");
  console.log("includeSpecialOrNot", includeSpecialOrNot);
  if (includeSpecialOrNot == true) {
    possibleCharaters = possibleCharaters.concat(specialCharArray);

    var randomChar = specialCharArray[Math.floor(Math.random() * upperCaseArray.length)];
    guarantedCharacters.push(randomChar);
  }
  console.log(possibleCharaters);

  var includeNumericOrNot = window.confirm("do you wanna include numbers");
  console.log("includeNumericOrNot", includeNumericOrNot);
  if (includeNumericOrNot == true) {
    possibleCharaters = possibleCharaters.concat(numberArray);
  }
  console.log(possibleCharaters);
  
  if (
    includeUpperOrNot === false &&
    includeLowerOrNot === false &&    
    includeSpecialOrNot === false &&
    includeNumericOrNot === false
  ) { 
    alert("Must choose one carater set") 
      return;
  }    
  
    for (var i = 0; i < numberOfCharacter; i++) {
      chosenLetter = possibleCharaters[Math.floor(Math.random() * possibleCharaters.length)];
      console.log(chosenLetter)
      finalPassword = finalPassword + chosenLetter;
    }
        
  var tempPassword = finalPassword.split("");

    for (var i = 0; i < guarantedCharacters.length; i++) {
      
      tempPassword[i] = guarantedCharacters[i]
    }
   console.log(tempPassword);
   finalPassword = tempPassword.join("");
  
  return finalPassword;    // the final password string
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
  






//grab a random character from possibleCharacters give name of randomCharacter
//     // password = password + randomCharacter



  //Object to store user inputs

  // console.log(passwordOptions

  //function for randomizing elements from an array
 
  //Write a function to acutally generate the password

  //create a variable to store the user object from our user input function
 
  // Variable to store the password as its being created we will be PUSHING the results as they are happening here
  
  // Create an array to store the types of characters to inclue in the password
  
  // create an array to store guaranted characters
  
  //Check if options exists if not exit the function
  
  //conditial statements that add array of lowerCase characters into array of possible caracters based on the users input(4x)
  
  //Create a for loop to iterate over the password length from the options object, selecting random I from the array of possible characters concating and return them into the results variable.
  
  //create a for loop for mix in atleast one of each guarenteed chracters into the result to mix in a guarenteed chracters to the result
  
  //return the result and make it into a string and pass it into writePassword
 
  // Write password to the #password input
  
  // Add event listener to generate button                                                                       



//   lowerCaseArray = ['a', 'b', 'c'];
// upperCaseArray = ['A', 'B', 'C']
// possibleCharacters = []
// console.log('here is possibleCharacters before push: ', possibleCharacters)
// // possibleCharacters.push(upperCaseArray)
// possibleCharacters = possibleCharacters.concat(upperCaseArray)

// console.log('here is after: ', possibleCharacters)
// // possibleCharacters.push(upperCaseArray)
// possibleCharacters = possibleCharacters.concat(lowerCaseArray)

// console.log('here is after lower push: ', possibleCharacters)
// password = "aCdRcD"
// for(var i=0; i<password.length; i++){
//     //grab a random character from possibleCharacters give name of randomCharacter
//     // password = password + randomCharacter

// }

// return password
   
          

  

               
                                          