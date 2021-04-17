const Command = require('../../Structures/Command.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['slow', 'slow-down', 'slow-channel', 'zawarudo'],
            description: 'Sets a slow mode for the channel that it is used in',
            category: 'Moderation',
            usage: '[0s - 21600s(6h) | Defaults to 1 min] <Reason>',
            userPerms: ['ADMINISTRATOR'],
            args: true
        });
    }

    // eslint-disable-next-line no-unused-vars
    async run(message, args) {

        if (/^[0-9]+$/.test(args[0])) {
            const time = parseInt(args[0], 10);

            if (time > 21600) return message.channel.send("Look here buddy, I can only slow time for 6 hours. No longer. Please refine your timestamp.")

            args.shift()

            if (!args[0]) return message.channel.send("You need to have a reason.")

            const reason = args.join(' ');

            const embed = new MessageEmbed()
                .setTitle('Slowed Channel')
                .setColor('PURPLE')
                .addFields(
                    { name: 'Moderator:', value: `<@!${message.author.id}>`, inline: true },
                    { name: 'Reason', value: `${reason}`, inline: true },
                    { name: 'Time Between Messages:', value: `${moment.utc(time * 1000).format("HH:mm:ss")}`, inline: true },
                )
                .setTimestamp()
                .setFooter(`Requested by an awesome mod`, message.author.displayAvatarURL);

            message.channel.send(embed);
            message.channel.send("If this is still up way after the conflict please feel free to message a moderator.")
            return message.channel.setRateLimitPerUser(time);

        } else {

            const time = 60;

            const reason = args.join(' ');

            const embed = new MessageEmbed()
                .setTitle('Slowed Channel')
                .setColor('PURPLE')
                .addFields(
                    { name: 'Moderator:', value: `<@!${message.author.id}>`, inline: true },
                    { name: 'Reason', value: `${reason}`, inline: true },
                    { name: 'Time Between Messages:', value: `${moment.utc(time * 1000).format("HH:mm:ss")}`, inline: true },
                )
                .setTimestamp()
                .setFooter(`Requested by an awesome mod`, message.author.displayAvatarURL);

            message.channel.send(embed);
            message.channel.send("If this is still up way after the conflict please feel free to message a moderator.")
            return message.channel.setRateLimitPerUser(time);
        }

    }

};
