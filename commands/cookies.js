module.exports = {
    name: 'cookies',
    description: "gives you a cookie",
    execute(message, args){

        if(message.member.roles.cache.has('918178501914411009')){
            message.channel.send('Here, have a cookie!');


        } else {
            message.channel.send('You dont have the permissions to use this command, this makes you a simple peasant');
            message.member.roles.add('918178501914411009').catch(console.error);
        }
    }
}