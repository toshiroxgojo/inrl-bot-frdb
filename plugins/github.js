const { inrl } = require("../lib/perfix");
const Config = require("../config");
inrl(
  {
    pattern: ["git"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
const msg = Config.GIT
    await client.sendMessage(message.from, msg, { quoted: message });
});
