module.exports = async(client) => {
var oynuyorkısmı = [
`ş!yardım`,
`Şakir Bot v1.0`,
];

setInterval(function() {
//sürekli tekrarlanacak bölüm
// 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
    var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);
   client.user.setActivity(oynuyorkısmı[random], { type: 'PLAYING' });
    }, 2 * 3500);


}