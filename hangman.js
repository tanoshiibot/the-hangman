window.onload = function() {

    let words = ["moka", "tiramisu", "panna cotta", "caramel", "capucinno", "crêpe", "latte machiatto", "mille-feuille", "merveilleux", "cupcake", "chocolat", "cheesecake", "meringue", "gâteau", "cookie", "madelaine", "sablé", "palmier", "brownie", "vanille", "crème", "spéculoos", "flan", "pudding", "donut", "beignet", "sucre", "café", "stretto", "lungo", "doppio", "expresso", "crème brûlée", "moelleux", "cannolis", "matcha", "sencha", "genmaicha", "gyokuro"]
    words = words.filter(element => ((!/[ 0-9]/.test(element)) && (element.length > 4)));

    let word = [];
    let spaces = [];
    let keysPressed = [];
    let lives = 9;
    let missChara = 0;


    function accentsTidy(s) {
        let r = s.toLowerCase();
        r = r.replace(new RegExp(/\s/g),"");
        r = r.replace(new RegExp(/[àáâãäå]/g),"a");
        r = r.replace(new RegExp(/æ/g),"ae");
        r = r.replace(new RegExp(/ç/g),"c");
        r = r.replace(new RegExp(/[èéêë]/g),"e");
        r = r.replace(new RegExp(/[ìíîï]/g),"i");
        r = r.replace(new RegExp(/ñ/g),"n");                
        r = r.replace(new RegExp(/[òóôõö]/g),"o");
        r = r.replace(new RegExp(/œ/g),"oe");
        r = r.replace(new RegExp(/[ùúûü]/g),"u");
        r = r.replace(new RegExp(/[ýÿ]/g),"y");
        r = r.replace(new RegExp(/\W/g),"");
        return r;
    };

    lives = 9;
    word = [...words[Math.floor(words.length * Math.random())]];
    word.forEach((x, i) => {
        word[i] = accentsTidy(x);
    })
    spaces = [...word].map(x => x == "-" ? " - " : " _ ");
    missChara = word.length;
    spaces.forEach((x) => {
        let a = document.createElement("LI");
        a.innerText = x;
        a.setAttribute("class", "character");
        document.getElementById("word").appendChild(a);
        if (x == " - ") {
            missChara--;
        } 
    })
    
    //HTML
    
    document.getElementById("debug").innerText = `${lives} left before death !`;

    document.addEventListener("keydown", event => {
        if ((lives > 0) && (missChara > 0)) {
            if ((event.keyCode >= 65) && (event.keyCode <= 90)) {
                document.getElementById("output").innerText = event.key;
                if (keysPressed.includes(event.key)){
                    document.getElementById("output2").innerText = "déjà dedans !!!";
                } else {
                    keysPressed.push(event.key);
                    if (word.includes(event.key)) {
                        word.forEach((x, i) => {
                            if (x == event.key) {
                                document.getElementsByClassName("character")[i].innerText = ` ${event.key} `;
                                missChara--;
                                document.getElementById("output2").innerText = missChara;
                                if (missChara == 0) {
                                    document.getElementById("output").innerText = "your won :)";
                                } 
                            }
                        })
                    } else {
                        lives--;
                        document.getElementById("hangman").setAttribute("src", `./img/${-lives + 9}.png`);
                    }
                }
            }
            document.getElementById("debug").innerText = `${lives} left before death !`
        } else if (lives == 0) {
            document.getElementById("output").innerText = "your ded :(";
        }
    })

};