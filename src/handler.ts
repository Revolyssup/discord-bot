
import discord from 'discord.js';
export default async function handlebot(msg: discord.Message){
    console.log(`${msg.author.tag}: ${msg.content}`)
    if(msg.content==='bruh'){
        msg.reply("Hy! Im ashish's bot")
    }   
    
}