const os = require("os");
const bots = require("../lib/perfix");
const { runtime } = require("../lib/Function");
const Config = require('../config');
const lang = bots.getString("system_stats");
const speed = require("performance-now");

var ov_time = new Date().toLocaleString("EN", { timeZone: "Asia/Kolkata" }); // .split(' ')[1]

bots.bot(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to know this bot is alive",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    try {
      let timestampe = speed();
      let Wspeed = speed() - timestampe;
const Message = {
image: { url: bots.config.image.url.D_E_TMB },
caption = `┌─❖
│「 𝚑𝚒 𝚋𝚛𝚘/𝚜𝚒𝚜 」
└┬❖ 「 ${message.client.pushName} 」
┌┤✑  ɪᴀᴍ ᴀʟɪᴠᴇ ʙʀᴏ
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│ ☯︎ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│ ☯︎ ʙᴏᴛɴᴀᴍᴇ : `+Config.profile.botName+`
│ ☯︎ ɢɪᴛʜᴜʙ  :`+Config.GIT+`
│ ☯︎ ᴡᴀ-ɢʀᴩ :`+Config.WAGRP+`
│ ☯︎ ᴡᴇʙꜱɪᴛᴇ :`+Config.WEB+`
└┬──────────────┈ ⳹
 │✑  D & T : ${ov_time}
 │✑ `+ Config.profile.ownerName+`
 └───────────────┈ ⳹`;
};
    await client.sendMessage( message.from, Message , { quoted: message })
    global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
