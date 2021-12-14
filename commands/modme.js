module.exports = {
    name: 'modme',
    description: "Promotes a member to a mod",
    execute(message, args){

        if (message.member.roles.cache.has('918175439669850142')){
            message.channel.send('You already inherit the role of moderator');
        } else {
            message.channel.send('You are now a mod.');
            message.member.roles.add('918175439669850142')
        }
        
    }
}