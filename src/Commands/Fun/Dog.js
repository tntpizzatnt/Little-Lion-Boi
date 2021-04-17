const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Sends a random picture of a Dog',
			category: 'Fun'
		});
	}

	async run(message) {
		const msg = await message.channel.send('Generating...');
		const { url } = await fetch('https://random.dog/woof.json?ref=apilist.fun').then(response => response.json());
		if (!url) return message.channel.send('Couldn\'t find anything please try')

        message.channel.send(url);
        return msg.delete();
	}

};
