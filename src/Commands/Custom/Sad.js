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
		message.channel.send("Very Quesadilla without the Que-illa!");
	}

};
