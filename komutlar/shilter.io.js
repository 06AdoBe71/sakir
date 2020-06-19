const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const shilterio = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Shilter.io Oyunu")
      .setDescription("[Link](https://shilter.io/)")
      .setTimestamp()
      return message.channel.sendEmbed(shilterio);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['shilter.io', 'shilterio'],
  permLevel: 0
};

exports.help = {
  name: 'Shilter.io',
  description: 'Shilter.io Oyunu.',
  usage: 'shilter.io'
};
