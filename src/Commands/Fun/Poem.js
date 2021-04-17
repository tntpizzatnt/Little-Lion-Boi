const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['poetry', 'poems'],
            description: 'Random poem',
			category: 'Fun',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        let msg = await message.channel.send(`Searching...`)
        const page = await fetch(`https://www.poemist.com/api/v1/randompoems`).then(response => response.json());

        if (!page) {
            return message.channel.send(`No poem found, please try again`)
        }

        const poem = page[0]

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const embed = new MessageEmbed()
            .setColor('PURPLE')
            .setTitle(`${poem.title} | By: ${poem.poet.name}`)
            .setURL(poem.url)
            .addFields(
                { name: 'Poem:', value: trim(poem.content, 1024), inline: true },
                { name: 'Poet', value: `${poem.poet.name}(<${poem.poet.url}>)`},
            );

        message.channel.send(embed);

        msg.delete();
	}

};
