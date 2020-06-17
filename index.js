const Discord = require('discord.js');
const client = new Discord.Client();
const colors = require('colors');

client.once('ready', () => {
    console.log('Discord botu başlatıldı! Botun ismi: "' + process.env.botname + '"');
});

client.on('message', message => {
    if (message.content === '!ping') {
        var ping = Date.now() - message.createdTimestamp + " ms";
        const pingembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**Pong**'),
        .setDescription("Ping'in")
        .addFields(
            { name: 'Şuanki pingin', value: "Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`" }
        )
        
        message.author.send(pingembed)
    }
    else if (message.content === `!sunucu`) {
        const SunucuEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**!!Sunucu Bilgileri!!**')
        .setAuthor(process.env.botname)
        .setDescription('Muratın Yaptığı Botun olduğu sunucunun bilgileri')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '**Sunucu İsmi**', value: message.guild.name },
            { name: '**Sunucu Katılımcı Sayısı**', value: message.guild.memberCount },
        )
        .setTimestamp()
        .setFooter('Murata yardım gönderin');
    
            message.author.send(SunucuEmbed);    
    }
    else if (message.content.startsWith(`!beep`)) {
        const beepembed = new Discord.MessageEmbed()
    .setAuthor(process.env.botname)
    .setColor('#00F3FF')
    .setTitle('**Boop**')
        message.channel.send(beepembed);
    }
    else if (message.content.startsWith(`!testkomudu`)) {
        if (message.author.username == 'World Of ANIME') {
            const testembed = new Discord.MessageEmbed()
        .setColor('#00F3FF')
        .setTitle('**Test Komudu**')
        .setAuthor(process.env.botname)
        .setDescription('**Test Komudu Çalıştırıldı**')
            message.author.send(testembed)
        } else {
            const testembed = new Discord.MessageEmbed()
        .setColor('#00F3FF')
        .setTitle('**Test Komudu**')
        .setAuthor(process.env.botname)
        .setDescription('**Sen Murat Kaan değilsin**')
            message.author.send(testembed)
        }
    }
    else if (message.content.startsWith('!komutlar')) {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#399A26')
	.setTitle('**!!Komutlar!!**')
	.setAuthor(process.env.botname)
	.setDescription('Bu Muratın yaptığı bir Discord botunun komutlarıdır')
	.addFields(
		{ name: '***Bazı komutlar***', value: '***2 komut***' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '**!sunucu**', value: '*Sunucu hakkında bilgi verir*' },
        { name: '**!komutlar**', value: '*Komutları gösterir*' },
        { name: '**!beep**', value: '*Eğlence Komudu*' },
        { name: '**!ping**', value: '*Eğlence Komudu*' },
        { name: '**!testkomudu**', value: '*Sadece Murat Kaan çalıştırabilir*' }
	)
	.setTimestamp()
	.setFooter('Murata yardım gönderin');

        message.author.send(exampleEmbed);
    }
 
    if (message.author.username = 'World Of ANIME') {
        console.log(colors.red(message.content));
    }
});

client.login(process.env.token);