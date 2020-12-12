const fetch = require('node-fetch');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const settings = { method: 'Get' };

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix} ping`) {
		message.channel.send('pong');
	} else if (message.content === `${prefix} beep`) {
		message.channel.send('boop');
	} else if (message.content === `${prefix} server`) {
		message.channel.send(
			`Server name: ${message.guild.name}\nTotal members: ${
				message.guild.memberCount
			}`
		);
	} else if (message.content === `${prefix} user`) {
		message.channel.send(
			`Your username: ${message.author.username}\nYour ID: ${message.author.id}`
		);
	} else if (message.content === `${prefix} avatar`) {
		message.channel.send(message.author.displayAvatarURL());
	} else if (message.content === `${prefix} help`) {
		message.channel.send(
			`Commands:
**.d help**
.d ping
.d beep
.d server
.d user
.d avatar
.d gay avatar
.d uptime 
.d lag
.d meme
.d reddit meme
.d joke
.d koala pic
.d fox pic
.d bird pic
.d panda pic
.d cat pic
.d dog pic
.d koala fact
.d bird fact
.d fox fact
.d panda fact
.d cat fact
.d dog fact
.d trump`
		);
	} else if (message.content == `${prefix} lag`) {
		message.channel.send(
			`Latency is ${Date.now() -
				message.createdTimestamp}ms. API Latency is ${Math.round(
				client.ws.ping
			)}ms`
		);
	} else if (message.content == `${prefix} reddit meme`) {
		fetch('https://meme-api.herokuapp.com/gimme', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.url);
			});
	} else if (message.content == `${prefix} joke`) {
		fetch('https://official-joke-api.appspot.com/random_joke', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(`${json.setup}\n**${json.punchline}**`);
			});
	} else if (message.content == `${prefix} meme`) {
		fetch('https://some-random-api.ml/meme', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.image);
			});
	} else if (message.content == `${prefix} dog fact`) {
		fetch('https://some-random-api.ml/facts/dog', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} cat fact`) {
		fetch('https://some-random-api.ml/facts/cat', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} panda fact`) {
		fetch('https://some-random-api.ml/facts/panda', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} fox fact`) {
		fetch('https://some-random-api.ml/facts/fox', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} bird fact`) {
		fetch('https://some-random-api.ml/facts/bird', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} koala fact`) {
		fetch('https://some-random-api.ml/facts/koala', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.fact);
			});
	} else if (message.content == `${prefix} dog pic`) {
		fetch('https://some-random-api.ml/img/dog', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content == `${prefix} cat pic`) {
		fetch('https://some-random-api.ml/img/cat', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content == `${prefix} panda pic`) {
		fetch('https://some-random-api.ml/img/panda', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content == `${prefix} bird pic`) {
		fetch('https://some-random-api.ml/img/birb', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content == `${prefix} fox pic`) {
		fetch('https://some-random-api.ml/img/fox', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content == `${prefix} koala pic`) {
		fetch('https://some-random-api.ml/img/koala', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.link);
			});
	} else if (message.content === `${prefix} gay avatar`) {
		message.channel.send(
			`https://some-random-api.ml/canvas/gay?avatar=${encodeURIComponent(
				message.author.displayAvatarURL().replace('webp', 'png')
			)}`
		);
	} else if (message.content === `${prefix} uptime`) {
		message.channel.send(`https://stats.uptimerobot.com/RkPMNfrJBx`);
	} else if (message.content == `${prefix} trump`) {
		fetch('https://api.tronalddump.io/random/quote', settings)
			.then(res => res.json())
			.then(json => {
				message.reply(`\n> ${json.value}\n-Donald Trump`);
			});
	}
});

client.login(process.env.DISCORD_TOKEN);
