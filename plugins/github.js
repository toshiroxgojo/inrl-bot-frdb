const { inrl } = require("../lib");
const inRl = require("../config");
const { stickersearch } = require("../lib/set_mension");
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
inrl(
  {
    pattern: ["search"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client, match) => {
if(match == "sticker"){
let data = await stickersearch(match.split(',')[0])
    await client.sendMessage(message.from,{ text : data }, { quoted: message });
    }
});
