const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const youtube = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("YouTube")
      .setDescription("[Link](https://www.youtube.com/)")
      .setTimestamp()
      return message.channel.sendEmbed(youtube);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['youtube', 'yutup', 'yt'],
  permLevel: 0
};

exports.help = {
  name: 'YouTube',
  description: 'Resmi YouTube Anasayfası.',
  usage: 'youtube'
};
