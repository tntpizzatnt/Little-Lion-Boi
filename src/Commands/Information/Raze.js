const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['sponsorship', 'sponsor'],
            description: 'Links Mufasa1789\'s Sponser',
			category: 'Information',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send("Try Raze for yourself and use code MUFASA for 15% off at checkout:\nhttps://bit.ly/3aHB3oU");
	}

};
