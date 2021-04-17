const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'Frick Paul',
			category: 'Custom',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send("<@280394081304051713> Screw you Paul lil baby man lil baby boy man stupid boi");
	}

};
