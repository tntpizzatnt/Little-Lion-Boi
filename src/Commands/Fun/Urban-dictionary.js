const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch');
const querystring = require('querystring')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['urban', 'dictionary', 'dict'],
            description: 'Finds a word in the Urban Dictionary',
			category: 'Fun',
            usage: '<Search Term>',
            args: true
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        const query = querystring.stringify({ term: args.join(' ') });
        
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`No result found for **${args.join(' ')}**.`)
        }

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const [answer] = list;

        const embed = new MessageEmbed()
            .setColor('#EFFF00')
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields(
                { name: 'Definition', value: trim(answer.definition, 1024) },
                { name: 'Example', value: trim(answer.example, 1024) },
                { name: 'Rating', value: `${answer.thumbs_up} 👍 • ${answer.thumbs_down} 👎` }
            );

        message.channel.send(embed);
	}

};
