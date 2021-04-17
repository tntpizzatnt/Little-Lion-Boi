const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js')
const covid = require('novelcovid')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['covid19', 'covid'],
            description: 'Displays Covid-19 Info',
			category: 'Information',
			usage: '',
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
        const covidStatus = await covid.all();
        
        return message.channel.send(new MessageEmbed()
            .setTitle('Covid-19 Status')
            .setColor('BLUE')
            .addFields(
                { name: 'Cases:', value: covidStatus.cases.toLocaleString(), inline: true },
                { name: 'Cases Today:', value: covidStatus.todayCases.toLocaleString(), inline: true },
                { name: 'Deaths:', value: covidStatus.deaths.toLocaleString(), inline: true },
                { name: 'Deaths Today:', value: covidStatus.todayDeaths.toLocaleString(), inline: true },
                { name: 'Recovered:', value: covidStatus.recovered.toLocaleString(), inline: true },
                { name: 'Recovered Today:', value: covidStatus.todayRecovered.toLocaleString(), inline: true },
                { name: 'Infected Right Now:', value: covidStatus.active.toLocaleString(), inline: true },
                { name: 'Critical Condition:', value: covidStatus.critical.toLocaleString(), inline: true },
                { name: 'Tested:', value: covidStatus.tests.toLocaleString(), inline: true },
            )
        );
	}

};
