/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
const bots = require("../lib/perfix");
const Config = require("../config");
bots.inrl(
  {
    pattern: ["setvar"],
    desc: "to check the bot status",
    sucReact: "💗",
    category: ["system", "all"],
  },
  async (message, client) => {
await client.sendMessage(message.from,
{text : `⛦━━💘SETVAR💘━━⛦\n\n
         *ᴛᴏ ꜱᴇᴛ ᴠᴀʀꜱ ʀᴇᴍᴏᴛʟy *\n
■□■□■□■□■□■□■□■□■□■□\n
           All setvars are\n\n

 To set bgm on or off\n
  _ex_ : set-bgm _-values are on, off\n\n

To set pdf file name\n
  _ex_ : set-text _-values are you text\n\n

To set alive text \n
  _ex_ : set-alive-text _-values are your txt\n\n

To set chatbot in bot\n
  _ex_ : set-chat-bot _-values are your true, false\n\n

To set react \n
  _ex_ : set-react _-values are your txt\n\n

 To change footer\n
_ex_ : set-footer\n\n

 To change INSTAGRAM UrL_\n
_ex_ : set-insta _-values are ml, en_\n\n

 To change LANGUAGE\n
_ex_ : set-lang  _-values are ml, en_\n\n

 To change sticker PACKNAME\n
_ex_ : set-pack \n\n

 To change GITHUB user name\n
_ex_ : set-git _-values are UrL_\n\n

 To set WEBSITE UrL_\n
_ex_ : set-web _-values are UrL_\n\n

 To change YT UrL_\n
_ex_ : set-yt _-values are UrL_\n\n

 To change CAPTION msg\n
_ex_ : set-cap\n\n

 To change WA-GRP\n
_ex_ : set-wa _-values are UrL_\n\n
________________________________
  to set images whats you want 
--------------------------------------------------
To change alive img\n
_ex_ : set-alive _-values are UrL_\n\n

 To change image11 img\n
_ex_ : set-img-1 _-values are UrL_\n\n

 To change imag12 img\n
_ex_ : set-imag-2 _-values are UrL_\n\n

 To change err img \n
_ex_ : set-err _-values are UrL_\n\n\n

      ═════💢💢════`}, { quoted: message });
});
