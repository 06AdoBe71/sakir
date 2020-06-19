const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
      const youtube = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setTitle("Yaani Arama Motoru")
      .setDescription("Türkiye'nin Arama Motoru Yaani\n e Yaani :D")
      .setDescription("[Link](https://www.yaani.com.tr)")
      .setTimestamp()
      return message.channel.sendEmbed(youtube);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaani'],
  permLevel: 0
};

exports.help = {
  name: 'Yaani',
  description: 'Türkiye nin Arama Motoru Yaani.',
  usage: 'yaani'
};
