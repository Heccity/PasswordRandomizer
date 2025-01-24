let characters = ["@", "#", "$", "%", "&", "*", "(", ")", "!", "^", "<", ">", "?", "/", ":", ";", ",", ".", "[", "]", "{", "}",
     "|", "+", "-", "_", "=", "~", "`", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
       "U", "V", "W", "X", "Y", "Z"];

let passwordLength = 15;
let passWord1 = document.getElementById("passWord1");
let passWord2 = document.getElementById("passWord2");

function generatePasswords(){
     let password = "";
     for(let i = 0; i < passwordLength; i++){
          let random = Math.floor(Math.random() *  characters.length);
          password += characters[random];
     }
     return password;
}

function getPassword() {
     passWord1.textContent = generatePasswords();
     passWord2.textContent = generatePasswords();
   }

