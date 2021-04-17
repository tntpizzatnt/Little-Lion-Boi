const Event = require('../Structures/Event');

module.exports = class extends Event {

	async run(member, message) {
		const channel = member.guild.channels.cache.get('699861710672232520');
        if (!channel) return;

        channel.send(`<@!${member.id}> has joined The Pack!`)
		member.roles.add(member.guild.roles.cache.find(i => i.name === 'The Cubs'))
	}

};
