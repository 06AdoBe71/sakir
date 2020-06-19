const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const oyunindirclub = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Oyun İndir Club")
      .setDescription("[Link](https://www.oyunindir.club/)")
      .setTimestamp()
      return message.channel.sendEmbed(oyunindirclub);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oic', 'oyunindir', 'oyunindirclub'],
  permLevel: 0
};

exports.help = {
  name: 'Oyunİndir.Club',
  description: 'Oyun İndir Club Sitesi.',
  usage: 'oyunindirclub'
};
