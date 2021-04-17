const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Creates a poll for people to vote.',
            category: 'Moderation',
            usage: '',
            userPerms: ['ADMINISTRATOR'],
        });
    }

    // eslint-disable-next-line no-unused-vars
    async run(message, args) {
        
    }

};
