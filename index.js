const Discord = require('discord.js')
const client = new Discord.Client();
require('dotenv').config()

client.on('raw', async res => {
 if(res.t !== "MESSAGE_REACTION_ADD" && res.t !== "MESSAGE_REACTION_REMOVE") return
 
 if(res.d.message_id != process.env.MESSAGE_ID) return
 
 const guild = client.guilds.get(process.env.GUILD_ID)
 
 // Amanhã eu termino, caralho que preguiça
})

client.login(process.env.TOKEN)
