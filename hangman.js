module.exports = function generateHangman() {

    let words = ["moka", "tiramisu", "panna cotta", "caramel", "capucinno", "crêpe", "latte machiatto", "mille-feuille", "merveilleux", "cupcake", "chocolat", "cheesecake", "meringue", "gâteau", "cookie", "madelaine", "sablé", "palmier", "brownie", "vanille", "crème", "spéculoos", "flan", "pudding", "donut", "beignet", "sucre", "café", "stretto", "lungo", "doppio", "expresso", "crème brûlée", "moelleux", "cannolis", "matcha", "sencha", "genmaicha", "gyokuro"]
    words = words.filter(element => ((!/[ 0-9]/.test(element)) && (element.length > 4)));

    let word = [];
    let spaces = [];
    let lives = 9;
    let missChara = 0;

    function accentsTidy(s) {
        let r = s.toLowerCase();
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
        return r;
    };

    lives = 9;
    word = [...words[Math.floor(words.length * Math.random())]];
    word.forEach((x, i) => {
        word[i] = accentsTidy(x);
    })
    spaces = [...word].map(x => x == "-" ? " - " : " ? ");
    missChara = word.length;
    spaces.forEach((x) => {
        if (x == " - ") {
            missChara--;
        } 
    })

    let hangman = [word, spaces, missChara];
    return hangman;
}