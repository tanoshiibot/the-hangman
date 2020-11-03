const bot = new (require("discord.js").Client)();
const { kMaxLength } = require("buffer");
const hangman = require("./hangman.js");

const PREFIX = ">"

let h, word, spaces, missChara, lives;
let drawHanged = [`|                :drooling_face:  `,`|         :ok_hand:` ,`|         :ok_hand: :shirt:` ,`|         :ok_hand: :shirt: :point_right:`,`|         :ok_hand: :shirt: :point_right:`, `|                :jeans: `];
let draw = [`---------------`,`|                 |`,`|          `,`|        ` ,`|           `,`----------------------`];

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.content.startsWith(PREFIX + "pendu")) {
        const [, ...args] = message.content.substring(PREFIX.length).split(/\s+/);
        if (args[0] != undefined) {
            if (args[0] == "start"){
                h = hangman();
                word = h[0];
                spaces = h[1];
                missChara = h[2];
                lives = 5;
                return message.channel.send(`${draw[0]}\n${draw[1]}\n${draw[2]}\n${draw[3]}\n${draw[4]}\n${draw[5]}\n\n${spaces.reduce((a, b) => a + b)}`);
            } else {
                if ((lives > 0) && (missChara > 0)) {
                    if (word.includes(args[0])) {
                        word.forEach((element, i) => {
                            if (element == args[0]) {
                                missChara--;
                                spaces[i] = args[0];
                            }
                        });
                    } else {
                        lives--;
                    }
                    return message.channel.send(`${draw[0]}\n${draw[1]}\n${lives < 5 ? drawHanged[0] : draw[2]}\n${lives < 4 ? drawHanged[-lives + 4] : draw[3]}\n${lives == 0 ? drawHanged[drawHanged.length - 1] : draw[4]}\n${draw[5]}\n\n${lives == 0 ? "you lost :(" : spaces.reduce((a, b) => a + b)}\n${missChara == 0 ? "you won :)" : ""}`);
                }
            }
        }
    }
});

bot.login(require("./config/token.json"));


