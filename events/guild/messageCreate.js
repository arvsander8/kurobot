const { Client, Intents, MessageEmbed, Message, Collection } = require("discord.js");

require("dotenv").config();
const prefix = process.env.PREFIX;


const me = new MessageEmbed()
    .setColor([237, 164, 26])
    .setTitle("KuroBot")
    .setAuthor("Causa_LiX", "http://images7.memedroid.com/images/UPLOADED950/61218584537ec.jpeg", "http://google.com")
    .setDescription("Hola usuario/a, bienvevnida al  clan  Kuro, aca te dejo una guia de los comandos 🧐 \n" +
        "1. Todos los comandos empiezan con !k!. \n")
    .addFields({
        name: "Calculadora 📱", value: "!k!suma, comando para sumar 📏. \n " +
            "!k!resta, comando para restar 📐.\n" +
            "!k!multi, comando para multiplicar ✍.\n" +
            "!k!divi, comando para dividir 📊."
    });

module.exports = async (client, discord, msg) => {
 
  if (msg.content.startsWith(prefix)) {
    //return msg.reply("si");
    const arg = msg.content.slice(prefix.length).split(/ +/);
    const com = arg.shift().toLocaleLowerCase();
    var rpt = 0;

    if (com == "help") {
        return msg.reply({ embeds: [me] });
    }

    if (com == "suma") {

        rpt = parseFloat(arg[0]) + parseFloat(arg[1]);
    }

    if (com == "resta") { //!k!suma 4 5 56 4234234234
        rpt = parseFloat(arg[0]) - parseFloat(arg[1]);
    }

    if (com == "multi") { //!k!suma 4 5 56 4234234234
        rpt = parseFloat(arg[0]) * parseFloat(arg[1]);
    }

    if (com == "divi") { //!k!suma 4 5 56 4234234234
        if (parseFloat(arg[1]) == 0) {
            return msg.reply("No se puede dividir entre 0 forro 😠");
        }
        rpt = parseFloat(arg[0]) / parseFloat(arg[1]);
    }
    const me2 = new MessageEmbed()
        .setColor([237, 164, 26])
        .setTitle("Utilizaste comando !k!" + com)
        .setAuthor("Causa_LiX", "http://images7.memedroid.com/images/UPLOADED950/61218584537ec.jpeg", "http://google.com")
        .setDescription("La respuesta es " + rpt + " pa,  vinito? 🍷")
        ;

    const command = client.commands.get(com);
    if(command) command.execute(client, msg, arg, discord);
    if(me2) return msg.reply({ embeds: [me2] });
    if(!command) return msg.channel.send("Este no es un comando!!");

    
   
    

}
else {
    return console.log(msg.author.username + ": " + msg.content);
}
 
 
 
 
 
 
 /* if (message.author.bot) return;

  if (!message.content.startsWith(prefix))
    return message.reply("Esto no es un comando");

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  if (command) command.execute(client, message, args, discord);
  if (!command) return message.channel.send("Este comando no existe");
  */
};
