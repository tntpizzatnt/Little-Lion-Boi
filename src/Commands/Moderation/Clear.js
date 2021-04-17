const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Clear a number of messages',
            category: 'Moderation',
            usage: '<number>',
            aliases: ['purge', 'nuke'],
            userPerms: ['ADMINISTRATOR'],
            args: true,
        });
    }

    // eslint-disable-next-line no-unused-vars
    async run(message, args) {
        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) return message.reply('Please put a number only!');

        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
    }

};
