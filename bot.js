const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`credit`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);







client.on("ready", () => {
let channel =     client.channels.get("510208896720306176")
setInterval(function() {
channel.send(`فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي`);
}, 50)
})






















        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
