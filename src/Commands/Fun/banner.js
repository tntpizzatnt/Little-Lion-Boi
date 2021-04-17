const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Banner-ifies whatever you want',
			category: 'Fun',
			usage: '<Word/phrase you want to Banner-ify>',
			args: true
		});
	}

	async run(msg, ...banner) {
		return msg.channel.send(await figlet(banner), { code: true });
	}

};
