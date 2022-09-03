const  bots = require('../lib/perfix')

bots.bot(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "🥱",
	   },
	async (message, client) => {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: 'Ping!' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: 'Pong!\n' + (end - start) + 'ms' }, { quoted: message })
		global.catchError = false;
	 }
);
