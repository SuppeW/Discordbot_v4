module.exports = {
    name: 'intro',
    description: "This is Discordbots introduction to new members.",
    execute(message, args){
        message.channel.send('Hey! I am custom bot for this discord server. I am constantly evolving and you can find a list of commands by typing -help in chat');
    }
}