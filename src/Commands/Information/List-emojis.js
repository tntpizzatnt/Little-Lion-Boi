const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['emojis'],
            description: 'Lists all emojis in the server',
			category: 'Information',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        const emojiList = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
        message.channel.send(emojiList);
	}

};
