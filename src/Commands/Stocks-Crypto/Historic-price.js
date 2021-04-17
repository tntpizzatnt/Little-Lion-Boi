const Command = require('../../Structures/Command');
var yahooStockPrices = require("yahoo-stock-prices")
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Looks up historical stock prices',
			category: 'Stocks-Crypto',
			usage: '<Ticker Symbol> <opening month 1-12> <opening day 1-32> <4 digit opening year> <closing month 1-12> <closing day 1-32> <4 digit closing year> <frequency (1d, 1wk, 1mo)>',
			args: true,
            aliases: ['hist-stock', 'hist-stocks', 'prev-stock', 'prev-stocks']
		});
	}

	async run(msg, args) {
        if (!args[7]) return msg.channel.send("You didn't have enough arguments. Check .help historic-price")
        
        const prices = await yahooStockPrices.getHistoricalPrices(args[1]-1, args[2]-1, args[3], args[4]-1, args[5]-1, args[6], args[0].toUpperCase(), args[7])
        return msg.channel.send(new MessageEmbed()
            .setTitle(`Historical Stocks for ${args[0].toUpperCase()}`)
            .setColor('BLUE')
            .addFields(
                { name: 'Start Date:', value: `\`${args[1]} ${args[2]} ${args[3]}\``, inline: true },
                { name: 'End Date:', value: `\`${args[4]} ${args[5]} ${args[6]}\``, inline: true },
                { name: 'Starting Opening Price:', value: `\`$${prices[0].open}\``, inline: true },
                { name: 'Starting High:', value: `\`$${prices[0].high}\``, inline: true },
                { name: 'Starting Low:', value: `\`$${prices[0].low}\``, inline: true },
                { name: 'Starting Close:', value: `\`$${prices[0].close}\``, inline: true },
                { name: 'Starting Volume', value: `\`${prices[0].volume}\``, inline: true },
                { name: 'Starting Adjusted Close:', value: `\`$${prices[0].adjclose}\``, inline: true },
                { name: 'Ending Opening Price:', value: `\`$${prices[1].open}\``, inline: true },
                { name: 'Ending High:', value: `\`$${prices[1].high}\``, inline: true },
                { name: 'Ending Low:', value: `\`$${prices[1].low}\``, inline: true },
                { name: 'Ending Close:', value: `\`$${prices[1].close}\``, inline: true },
                { name: 'Ending Volume', value: `\`${prices[1].volume}\``, inline: true },
                { name: 'Ending Adjusted Close:', value: `\`$${prices[1].adjclose}\``, inline: true },
            )
        );
    }

};
