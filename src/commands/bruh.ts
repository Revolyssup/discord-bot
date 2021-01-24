import discord from "discord.js"
export default function(args: Array<string>,msg:discord.Message){
    args.forEach(arg=>{
        msg.reply(arg);
    })
    
}