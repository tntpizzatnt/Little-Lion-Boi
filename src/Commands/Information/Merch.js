const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['shop', 'store'],
            description: 'Links Mufasa1789\'s merch store',
			category: 'Information',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send("The official Merch Store is:\nhttps://streamlabs.com/mufasa1789/merch");
	}

};
