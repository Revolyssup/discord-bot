"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function handlebot(msg) {
    console.log(`${msg.author.tag}: ${msg.content}`);
    if (msg.content === 'bruh') {
        msg.reply("Hy! Im ashish's bot");
    }
}
exports.default = handlebot;
