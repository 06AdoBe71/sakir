const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const splixio = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Splix.io Oyunu")
      .setDescription("[Link](https://splix.io/)")
      .setTimestamp()
      return message.channel.sendEmbed(splixio);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['splixio', 'splix.io'],
  permLevel: 0
};

exports.help = {
  name: 'Splix.io',
  description: 'Splix.io Oyunu.',
  usage: 'splixio'
};
