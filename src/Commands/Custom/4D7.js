const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'Sadness',
			category: 'Custom',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send("https://cdn.discordapp.com/attachments/779167275005640724/830507923188875314/4D7.mp4");
	}

};
