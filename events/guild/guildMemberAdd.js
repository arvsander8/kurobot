
const {createCanvas,loadImage}  = require("canvas")
const { join } =require("path")

module.exports = async (client, discord, member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.id === "885587804002848808"
  );
  const guild = member.guild;
  const canvas = createCanvas(1200, 635); //Tamaño de nuestra imagen
  const ctx = canvas.getContext("2d");

  const background = await loadImage(join(__dirname, "../../img", "bg.jpg")); //Imagen de fondo

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000000";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const name = member.user.username;

  if (name.length >= 10) {
    ctx.font = "bold 50px Sans";
    ctx.fillStyle = "#FF9B00";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
  } else {
    ctx.font = "bold 100px Sans";
    ctx.fillStyle = "#FF9B00";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
  }

  const server = "Bienvenido a: \n" + member.guild.name;

  ctx.font = "bold 50px sans-serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(server, canvas.width / 2, canvas.height / 2 - 100);

  ctx.beginPath();
  ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await loadImage(
    member.user.displayAvatarURL({ format: "png" })
  );

  ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);

  const imagen = new discord.MessageAttachment(canvas.toBuffer(), "img.png");

  //%CANVAS

  //& ROL
  //onst guild = member.guild;
  const rol = guild.roles.cache.find((role) => role.name === "Verificado");
  member.roles.add(rol);
  //& ROL

  /*const channel = member.guild.channels.cache.find(
    (channel) => channel.id === "885587804002848808"
  );*/

  const reglas = member.guild.channels.cache.find(
    (channel) => channel.id === "885587804002848808"
  );

  const me = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Bienvenido usuario/a a ӄʊʀօ 𝕮𝖑𝖆𝖓")
    .setDescription(`Lee las reglas en ${"ℝ𝕖𝕘𝕝𝕒𝕞𝕖𝕟𝕥𝕠-『📗📖』, espero que te guste \n nuestro barrio pa 🧐🍷 "}`)
    .setImage("attachment://img.png")
    .setTimestamp()
    .setFooter(member.guild.name);

  channel.send({ embeds: [me], files: [imagen] });

  
  //const rol = guild.roles.cache.find(role => role.name == "prueba")

};

 /* guild.roles.cache.forEach((role) => {
    console.log("Name: " + role.name+ "ID: " + role.id);
  });*/






  /*const me = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Bienvendia")
    .setAuthor(
      member.user.username /*Autor*/
  //   member.user.displayAvatarURL() /* Icono*/
  //   )
  // .setDescription(`Se bienvendio al servidor ${member.guild.name}`)
  //.setThumbnail("https://i.imgur.com/H37kxPH.jpeg")
  //.setTimestamp()
  //.setFooter(member.guild.name, "https://i.imgur.com/H37kxPH.jpeg");

  //channel.send({ embeds: [me] });

