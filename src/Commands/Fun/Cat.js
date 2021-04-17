const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Sends a random picture of a Cat',
			category: 'Fun'
		});
	}


	async run(message) {
		const msg = await message.channel.send('Generating...');
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		if (!file) return message.channel.send('Couldn\'t find anything please try')

        message.channel.send(url);
        return msg.delete();
	}

};
