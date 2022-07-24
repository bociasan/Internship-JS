const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
    let message = document.querySelector(".message");
    let code = document.querySelector(".code");
    let encryptedMessage = document.querySelector(".encrypted-message");




    document.querySelector(".copy-button").addEventListener("click", () => {

        var copyTextarea = document.querySelector('.encrypted-message');
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    })

    document.querySelector(".encrypt-button").addEventListener("click", () => {
        document.querySelector("#result").innerHTML = "Your encrypted message:";

        let text = typeof message.value === 'string' ? message.value.toUpperCase() : '';
        let key = code.value.toUpperCase();
        encryptedMessage.value = "";

        for (var i = 0; i < text.length; i++) {
            let j = i % key.length;
             encryptedMessage.value += characters[(characters.indexOf(text[i]) + characters.indexOf(key[j])) % characters.length];
        }
    });



    document.querySelector(".decrypt-button").addEventListener("click", () => {
        document.querySelector("#result").innerHTML = "Your decrypted message:";
        let text = typeof message.value === 'string' ? message.value.toUpperCase() : '';
        let key = code.value.toUpperCase();
        encryptedMessage.value = "";

        for (var i = 0; i < text.length; i++) {
            let j = i % key.length;

            encryptedMessage.value += characters[characters.indexOf(text[i]) - characters.indexOf(key[j]) >= 0
                ? characters.indexOf(text[i]) - characters.indexOf(key[j])
                : characters.length + characters.indexOf(text[i]) - characters.indexOf(key[j])];
        }
    });