window.onload = function() {

    let words = ["moka", "tiramisu", "panna cotta", "caramel", "capucinno", "crêpe", "latte machiatto", "mille-feuille", "101010aaaaa"]
    console.log(words);
    words = words.filter(element => ((!/[ 0-9]/.test(element)) && (element.length > 4)));
    console.log(words);

    let word = [];
    let spaces = [];
    let keysPressed = [];
    let lives = 9;

    //HTML

    document.getElementById("debug").innerText = `${lives} left before death !`
    document.getElementById("test").addEventListener("click", () => {
        word = [...words[Math.floor(words.length * Math.random())]];
        console.log(word);
        spaces = [...word].map(x => x == "-" ? " - " : " _ ");
        spaces.forEach((x) => {
            let a = document.createElement("LI");
            a.innerText = x;
            a.setAttribute("class", "character")
            document.getElementById("word").appendChild(a);
        })
    })
    
    document.addEventListener("keydown", event => {
        if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
            document.getElementById("output").innerText = event.key;
            if (keysPressed.includes(event.key)){
                document.getElementById("output2").innerText = "déjà dedans !!!"
            } else {
                keysPressed.push(event.key);
                document.getElementById("output2").innerText = keysPressed;
                if (word.includes(event.key)) {
                    word.forEach((x, i) => {
                        if (x == event.key) {
                            document.getElementsByClassName("character")[i].innerText = ` ${event.key} `;
                        }
                    })
                } else {
                    lives --
                    document.getElementById("hangman").setAttribute("src", `./img/${-lives + 9}.png`)
                }
            }
        }
        document.getElementById("debug").innerText = `${lives} left before death !`
    })

};