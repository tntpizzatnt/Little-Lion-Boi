const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['pog'],
            description: 'Poggers',
			category: 'Custom',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		const clownwatto = message.guild.emojis.cache.find(emoji => emoji.name === 'clownwatto');
        message.react(clownwatto);
        message.channel.send(`Thank you for the poggers Drew.${clownwatto}`)
            .then(msg => {
                msg.react(clownwatto)
            })
	}

};
