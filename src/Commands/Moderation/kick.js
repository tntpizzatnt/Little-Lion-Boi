const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            description: 'kicks a user',
			category: 'Moderation',
			usage: '<@User>',
            userPerms: ['ADMINISTRATOR'],
            args: true,
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        return message.channel.send("In the works.")
	}

};
