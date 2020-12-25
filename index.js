require('./server.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const { prefix, color } = require('./config.json');
const client = new Discord.Client();
const settings = { method: 'Get' };

function embed(message, title, footer) {
	if (title.length > 256) {
		return {
			embed: {
				description: title,
				color: color,
				footer: {
					icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
					text: footer + ' | Diamond'
				}
			}
		};
	} else {
		return {
			embed: {
				title: title,
				color: color,
				footer: {
					icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
					text: footer + ' | Diamond'
				}
			}
		};
	}
}

client.once('ready', () => {
	console.log('Ready!');
	console.log(client.guilds.cache.size);
	client.user.setStatus('online');
	client.user.setPresence({
		game: {
			name: `.d help in ${client.guilds.cache.size} servers`,
			type: 'Listening',
			url:
				'https://discord.com/oauth2/authorize?client_id=787006555761279006&scope=bot&permissions=8'
		}
	});
});

client.on('message', message => {
	if (message.content === `${prefix} ping`) {
		message.channel.send(embed(message, 'pong', 'Test Command'));
	} else if (message.content === `${prefix} beep`) {
		message.channel.send(embed(message, 'bloop', 'Test Command'));
	} else if (message.content === `${prefix} server`) {
		message.channel.send(
			embed(
				message,
				`Server name: ${message.guild.name}\nTotal members: ${
					message.guild.memberCount
				}`,
				'Server'
			)
		);
	} else if (message.content === `${prefix} user`) {
		message.channel.send(
			`Your username: ${message.author.username}\nYour ID: ${message.author.id}`
		);
	} else if (message.content === `${prefix} avatar`) {
		message.channel.send(message.author.displayAvatarURL());
	} else if (message.content === `${prefix} help`) {
		message.channel.send(embed(message, 
			`Commands:
**.d help**
**.d invite**
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
.d trump
.d clear
.d geek joke
.d ron swanson
.d trigger avatar
.d kanye west
.d chuck norris
.d star wars`, "Command List")
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
		fetch('https://dog.ceo/api/breeds/image/random', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(json.message);
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
	} else if (message.content == `${prefix} invite`) {
		message.reply(
			`Join the bot here: https://discord.com/oauth2/authorize?client_id=787006555761279006&scope=bot&permissions=8`
		);
	} else if (message.content === `${prefix} trigger avatar`) {
		message.channel.send(
			`https://some-random-api.ml/canvas/triggered?avatar=${encodeURIComponent(
				message.author.displayAvatarURL().replace('webp', 'png')
			)}`
		);
	} else if (message.content === `${prefix} clear`) {
		if (message.member.hasPermission('MANAGE_MESSAGES')) {
			message.channel.messages.fetch().then(results => {
				message.channel.bulkDelete(results);
				message.channel.send(embed(message, "Messages Deleted Successfully", "Clear Messages"))
			});
			
		} else{
		  message.channel.send(embed(message, "You do not have the permission **Manage Messages** to clear messages", "Clear Messages"))
		}
	} else if (message.content == `${prefix} kanye west`) {
		fetch('https://api.kanye.rest/?format=json', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(embed(message, json.quote, "Kanye West Quote"));
			});
	} else if (message.content == `${prefix} ron swanson`) {
		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(embed(message, json.quote, "Ron Swanson Quote"));
			});
			//
	} else if (message.content == `${prefix} geek joke`) {
		fetch('https://geek-jokes.sameerkumar.website/api?format=json', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(embed(message, json.joke, "Geek Joke"));
			});
	} else if (message.content == `${prefix} chuck norris`) {
		fetch('https://api.chucknorris.io/jokes/random', settings)
			.then(res => res.json())
			.then(json => {
				message.channel.send(embed(message, json.value, "Chuck Norris Quote"));
			});
	} else if (message.content == `${prefix} star wars`) {
		fetch(
			'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote',
			settings
		)
			.then(res => res.json())
			.then(json => {
				message.channel.send(
					embed(message, json.starWarsQuote, 'Star Wars Quote')
				);
			});
	}
});
client.login(process.env.DISCORD_TOKEN);

