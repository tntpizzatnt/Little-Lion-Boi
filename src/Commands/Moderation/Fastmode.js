const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['fast', 'fast-channel'],
            description: 'Removes the cooldown from channels',
            category: 'Moderation',
            usage: '',
            userPerms: ['ADMINISTRATOR'],
        });
    }

    // eslint-disable-next-line no-unused-vars
    async run(message, args) {

        message.channel.send("Channel cooldown has been removed.")
        return message.channel.setRateLimitPerUser(0);

    }

};
