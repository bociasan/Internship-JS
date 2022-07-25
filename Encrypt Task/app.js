const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
let message = document.querySelector(".message");
let code = document.querySelector(".code");
let encryptedMessage = document.querySelector(".encrypted-message");
function cripter(is_raw=false){
    let text = message.value.toUpperCase()
    let key = code.value.toUpperCase();
    encryptedMessage.value = "";
    for (var i = 0; i < text.length; i++) {
        if (is_raw) {
            encryptedMessage.value += characters[(characters.indexOf(text[i]) + characters.indexOf(key[i % key.length])) % characters.length]
            document.querySelector("#result").innerHTML = "Your encrypted message"
        } else {
            encryptedMessage.value += characters.at(characters.indexOf(text[i]) - characters.indexOf(key[i % key.length]))
            document.querySelector("#result").innerHTML = "Your decrypted message"
        }
    }
}
document.querySelector(".copy-button").addEventListener("click", () => navigator.clipboard.writeText(encryptedMessage))
document.querySelector(".insert-button").addEventListener("click", () => message.value = encryptedMessage.value)