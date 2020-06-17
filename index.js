const { Client, RichEmbed } = require('discord.js');
const colors = require('colors');

client.once('ready', () => {
    console.log('Discord botu başlatıldı! Botun ismi: "' + process.env.botname + '"');

    client.user.setPresence({
        game: {
            name: "Glişmesini",
            type: "WATCHING"
        }
    });
});

client.on('message', message => {
    const prefix = "!"

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!messgae.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args().toLowerCase();

    if (cmd == "ping") {
        const msg = await async message.channel.send('Pingleniyor...')

        msg.edit('Pong\nGecikme süren: ${Math.floor(msg.createdAt - message.createdAt)}\nAPI gecikmen: ${Math.round(client.ping)}ms')
    }

    if (cmd == "söyle") {
        if (message.deletable) message.delete();

        if (args.length < 1)
            return message.reply("Söylenicek birşey yok!").then(m -> m.delete(5000));

        const roleColor = message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "));

            message.channel.send(embed)
        }
    }
});

client.login(process.env.token);