const Command = require('../../Structures/Command');
var yahooStockPrices = require("yahoo-stock-prices")

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Looks up stock prices',
			category: 'Stocks-Crypto',
			usage: '<Ticker Symbol>',
			args: true,
            aliases: ['stock', 'stocks']
		});
	}

	async run(msg, args) {
        if (args[1]) return msg.channel.send("Unfortunately I only read the first Ticker Symbol after my command. If you tried to type something else after, or tried to query two stocks please try again only using one.")
		yahooStockPrices.getCurrentPrice(`${args[0].toUpperCase()}`, (err, price) => {
            if (price == undefined) {
                return msg.channel.send("ERROR :( - You most likely used the wrong Ticker Symbol")
            }
            msg.channel.send('$' + price);
        });
	}

};
