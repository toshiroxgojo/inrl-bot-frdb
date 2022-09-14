const { inrl } = require("../lib/perfix");
const inRl = require("../config");
inrl(
  {
    pattern: ["git"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    await client.sendMessage(message.from,{ text : inRl.GIT }, { quoted: message });
});
