const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["kylo"],
            description: 'Blow that piece of junk out of the sky',
			category: 'Custom',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send("https://tenor.com/view/ben-solo-star-wars-piece-of-junk-out-of-the-sky-pointing-gif-15974763");
	}

};
