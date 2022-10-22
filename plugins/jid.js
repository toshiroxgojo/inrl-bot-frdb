//created by @ inrl

const { inrl } = require('../lib/');
inrl(
	   {
		pattern: ['jid'],
		desc: 'To get group JiD',
                sucReact: "😉",
                category: ["system", "all"],
	   },
	async (message, client) => {
		return await client.sendMessage( message.from, { text: message.from }, { quoted: message })
                }
);
