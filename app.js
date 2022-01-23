require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//! CODIGO

/**MONGOOSE */

const mongoose = require("mongoose");
const mg = process.env.MONGOCONNECTION;


mongoose.connect(mg,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("------------------------------LOGS DEL BOT----------------------------------");
  console.log("Conectado a Mongo!!");
}).catch((e) =>{
  console.log(e);
});

/** */



client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});
//!------

client.login(process.env.TOKEN_SECRETO);
