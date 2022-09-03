const bots = require('../lib/perfix')

bots.bot(
	{
		pattern: ['clear'],
		desc: "to clear grp msgs",
                sucReact: "💻",
                category: ["search", "all"],
	},
	async (message, client) => {
		await message.modifyChat(message.jid, ChatModification.delete)
		await client.sendMessage( message.from, { text: 'inrl-bot-md cleared you chat' }, { quoted: message })
		global.catchError = false;
	}
);
