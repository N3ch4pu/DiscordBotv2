const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Server-Info!',
	execute(message, args) {
		message.channel.send(`Jméno serveru: ${message.guild.name}\nPočet pepegátorů: ${message.guild.memberCount}`)	
	},
};