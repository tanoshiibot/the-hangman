window.onload = function() {

    let words = ["moka", "tiramisu", "panna cotta", "caramel", "capucinno", "crêpe", "latte machiatto", "mille-feuille", "101010aaaaa"]
    console.log(words);
    words = words.filter(element => ((!/[ 0-9]/.test(element)) && (element.length > 4)));
    console.log(words);
    
    //HTML

    document.getElementById("test").addEventListener("click", () => {
        let word = words[Math.floor(words.length * Math.random())];
        word = [...word];
        console.log(word);
    })
    
    document.addEventListener("keydown", event => {
        if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
            document.getElementById("output").innerText = event.keyCode;
        }
    })
    

};