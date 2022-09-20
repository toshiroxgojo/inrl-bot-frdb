const bots = require("../lib/perfix");
const Config = require("../config");
bots.inrl(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
const Message = {
      image: { url: bots.config.image.url.D_E_TMB },
      caption: `╭═══〘`+Config.profile.botName +`〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴏᴡɴᴇʀ :`+Config.profile.ownerName+`
┃☯︎│ ᴜꜱᴇʀ : ${message.client.pushName}
┃☯︎│ ᴍᴏᴅᴇ : `+ Config.WORKTYPE +`
┃☯︎│ ꜱᴇʀᴠᴇʀ : ʜᴇʀᴏᴋᴜ
┃☯︎│ ᴛᴏᴛᴇʟ ʀᴀᴍ : 16.93 
┃☯︎│ ᴀᴠᴀʟɪʙʟᴇ ʀᴀᴍ : 0.95
┃☯︎│ ᴛᴏᴛᴇʟ ꜱᴩᴀᴄᴇ : 512ᴍʙ
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${Config.VERSION}
┃☯︎│ ɢɪᴛʜᴜʙ :`+Config.GIT+`
┃☯︎│ ᴡᴇʙꜱɪᴛᴇ :`+Config.WEB+`
┃☯︎│ ᴅᴀᴛᴀʙᴀꜱᴇ : ɪ-ʙᴏᴛ-ꜱᴇʀᴠᴇʀ
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ :`+Config.VIDEO+`
┃☯︎│ yᴏᴜᴛᴜʙᴇ :`+Config.YT+`
┃☯︎│
┃☯︎│  --------------------
┃☯︎│      `+Config.PACKNAME+`  
┃☯︎│  --------------------
┃☯︎│ 
┃☯︎╰───────────────
╰═════════════════⊷`
    };
    await client.sendMessage(message.from, Message, { quoted: message });
});
