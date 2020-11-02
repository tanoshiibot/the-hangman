const bot = new (require("discord.js").Client)();
const minesweeper = require("./hangman.js");

const PREFIX = ">"

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX + "pendu")) {
        

    }
});

bot.login(require("./config/token.json"));


