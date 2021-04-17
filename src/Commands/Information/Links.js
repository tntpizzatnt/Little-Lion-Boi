const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['link', 'socials', 'social', 'insta', 'twitch', 'twitter', 'tik-tok', 'website'],
            description: 'Lists Mufasa1789\'s socials',
			category: 'Information',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setDescription("Here lies all of his Dank Links")
            .addFields(
                { name: "Twitch:", value: "[Link](https://www.twitch.tv/mufasa1789)"},
                { name: "Twitter:", value: "[Link](https://twitter.com/Mufasa1789)"},
                { name: "Insta:", value: "[Link](https://www.instagram.com/mufasa1789/)"},
                { name: "Tik Tok:", value: "[Link](https://www.tiktok.com/@mufasa1789?lang=en)"},
                { name: "Website:", value: "[Link](https://mufasa1789.fans)" }
            );

        return message.channel.send(embed);
	}

};
