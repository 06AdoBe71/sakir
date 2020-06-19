const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "🤖Şakir Bot Komut Listesi",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/663734944517849108/722034602390192209/JPEG_20200602_204639.jpg"
			},
            title: "📜 Komutlar 📜",
            description: "📌 ş!avatar\n📌 ş!ban\n📌 ş!bayrak\n📌 ş!çekiliş\n📌 ş!duyuru\n📌 ş!emojikur\n📌 ş!emojiyazı\n📌 ş!ısmarla\n📌 ş!istatistik\n📌 ş!kick\n📌 ş!kullanıcıbilgim\n📌 ş!mesajdöndür\n📌 ş!mute\n📌 ş!oylama\n📌 ş!oyunindirclub\n📌 ş!ping\n📌 ş!reklam-engelle aç\n📌 ş!rol-al\n📌 ş!rol-ver\n📌 ş!sahip\n📌 ş!shilter.io\n📌 ş!splix.io \n📌 ş!sunucubilgi\n📌 ş!sunucukur\n📌 ş!tekmeat\n📌 ş!temizle\n📌 ş!unmute\n📌 ş!uyar\n📌 ş!wasted\n📌 ş!yaani\n📌 ş!yaz \n📌 ş!youtube",
            fields: [
				{
                name: ".",
				inline: true,
                value: "."
			  },
			  	{
                name: ".",
				inline: true,
                value: "."
			  },
				{
                name: ".",
				inline: true,
                value: ".",
              },
            ],
          }
        });  
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'yardım', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
