const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const inputEl = document.getElementById("passwordBox1")
const inputEl2 = document.getElementById("passwordBox2")

function getRandomPass() {
    return getRandomPass()
}

function getRandomPass() {
    let passwordGen = ""
    let passwordGen2 = "" 

    for (let i = 0; i <= 14; i++) {
        let randomChars = Math.floor( Math.random() * characters.length)
        let randomChars2 = Math.floor( Math.random() * characters.length)
        passwordGen += characters[randomChars]
        passwordGen2 += characters[randomChars2]
    }    
    inputEl.textContent = passwordGen
    inputEl2.textContent = passwordGen2
}

