const { Client, Intents, DiscordAPIError } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const Discord = require('discord.js');

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('I am online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'intro'){
        client.commands.get('intro').execute(message, args);
    } else if (command === 'cookies'){
        client.commands.get('cookies').execute(message, args);
    } else if (command === 'modme'){
        client.commands.get('modme').execute(message, args);
    }
});




client.login('OTE4MTI3OTczODM0NTYzNjA0.YbCvTg.q0RnEbDq5XUWtysSnUcJLKWxs6w');