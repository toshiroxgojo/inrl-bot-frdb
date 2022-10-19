var NewGen, templateButtons;
const os = require("os");
const speed = require("performance-now");
const  { inrl , config, inrlQuita, insult }= require('../lib/')
const Config = require("../config");

inrl(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
             try {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*' }, { quoted: message })
		global.catchError = false;
                } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
                }
	 }
);
const InRl = require('../lib/Store');


inrl({ pattern: ['del'], desc: "to create to delete unwanted grp msg by admins",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {

                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
            }
);

//testing automasion

function _0x529f(_0x13e07d,_0x1b4eb4){const _0x4cea4a=_0x4cea();return _0x529f=function(_0x529fa8,_0x496d09){_0x529fa8=_0x529fa8-0x179;let _0x35a062=_0x4cea4a[_0x529fa8];return _0x35a062;},_0x529f(_0x13e07d,_0x1b4eb4);}const _0x992782=_0x529f;(function(_0x772601,_0x5126b4){const _0x120eef=_0x529f,_0x5107aa=_0x772601();while(!![]){try{const _0x2ff08a=-parseInt(_0x120eef(0x180))/0x1+-parseInt(_0x120eef(0x19c))/0x2+-parseInt(_0x120eef(0x1a6))/0x3*(-parseInt(_0x120eef(0x19e))/0x4)+parseInt(_0x120eef(0x197))/0x5+parseInt(_0x120eef(0x191))/0x6+-parseInt(_0x120eef(0x189))/0x7*(parseInt(_0x120eef(0x196))/0x8)+parseInt(_0x120eef(0x183))/0x9;if(_0x2ff08a===_0x5126b4)break;else _0x5107aa['push'](_0x5107aa['shift']());}catch(_0x2e8753){_0x5107aa['push'](_0x5107aa['shift']());}}}(_0x4cea,0x7fb22),inrl({'pattern':[_0x992782(0x1a0),_0x992782(0x185),_0x992782(0x184)],'desc':_0x992782(0x17d),'sucReact':'🥰','category':[_0x992782(0x199),_0x992782(0x1a3)]},async(_0x21d1cf,_0x4e6530)=>{const _0x1b530b=_0x992782,_0x44617a=await inrlQuita(),_0x48978d=await insult(),_0x27ac4a=_0x21d1cf['client'][_0x1b530b(0x18c)],_0x3c6ac9=global[_0x1b530b(0x190)][_0x1b530b(0x187)],_0x4f9088=Config[_0x1b530b(0x1a7)],_0xbd7730=Config['YT'],_0x32756a=Config[_0x1b530b(0x17e)];let _0x6d1837=global[_0x1b530b(0x190)]['users'][_0x1b530b(0x1a4)],_0x14d5d0=new Date()[_0x1b530b(0x188)]('EN',{'timeZone':_0x1b530b(0x179)});;let _0x273daf=os[_0x1b530b(0x192)]();const _0x42244d=Config[_0x1b530b(0x19f)];if(_0x42244d[_0x1b530b(0x17a)](';')){var _0x1544ef=_0x42244d[_0x1b530b(0x18d)](';');aliveImgUrl=_0x1544ef[0x0],aliveTxt=_0x1544ef[0x1],aliveButton1=_0x1544ef[0x2],aliveButton2=_0x1544ef[0x3];}NewGen=aliveTxt;NewGen[_0x1b530b(0x17a)](_0x1b530b(0x19b))&&(NewGen=NewGen[_0x1b530b(0x18f)](_0x1b530b(0x19b),''+_0x44617a));NewGen['includes'](_0x1b530b(0x1a8))&&(NewGen=NewGen['replace'](_0x1b530b(0x1a8),''+_0x48978d));NewGen[_0x1b530b(0x17a)](_0x1b530b(0x17b))&&(NewGen=NewGen['replace'](_0x1b530b(0x17b),''+_0x27ac4a));NewGen[_0x1b530b(0x17a)](_0x1b530b(0x1a1))&&(NewGen=NewGen['replace'](_0x1b530b(0x1a1),''+_0x6d1837));NewGen['includes']('#Hits')&&(NewGen=NewGen[_0x1b530b(0x18f)]('#myUsers',''+_0x6d1837));NewGen[_0x1b530b(0x17a)](_0x1b530b(0x18b))&&(NewGen=NewGen[_0x1b530b(0x18f)](_0x1b530b(0x18b),''+_0x273daf));NewGen[_0x1b530b(0x17a)]('#date')&&(NewGen=NewGen['replace'](_0x1b530b(0x186),''+_0x14d5d0));NewGen[_0x1b530b(0x17a)](_0x1b530b(0x1a9))&&(NewGen=NewGen[_0x1b530b(0x18f)]('#Hits',''+_0x3c6ac9));NewGen[_0x1b530b(0x17a)]('#Git')&&(NewGen=NewGen[_0x1b530b(0x18f)](_0x1b530b(0x19a),''+_0x4f9088));NewGen['includes']('#Yt')&&(NewGen=NewGen['replace']('#Yt',''+_0xbd7730));let _0x45fcce=[],_0x1d93a5={'buttonId':'1','buttonText':{'displayText':aliveButton1},'type':0x1},_0x7e88a7={'buttonId':'2','buttonText':{'displayText':aliveButton2},'type':0x1};if(NewGen[_0x1b530b(0x17a)]('#Insta')){NewGen=NewGen['replace'](_0x1b530b(0x1a5),'');let _0x1d7c51={'index':0x1,'urlButton':{'displayText':_0x1b530b(0x193),'url':_0x32756a}};await _0x45fcce[_0x1b530b(0x198)](_0x1d7c51);}_0x45fcce[_0x1b530b(0x198)](_0x1d93a5),_0x45fcce[_0x1b530b(0x198)](_0x7e88a7);let _0x3b98ba=''+NewGen;if(aliveImgUrl['endsWith'](_0x1b530b(0x194)))templateButtons={'video':{'url':aliveImgUrl},'caption':''+_0x3b98ba,'footer':config[_0x1b530b(0x19d)][_0x1b530b(0x17f)],'buttons':_0x45fcce},await _0x4e6530[_0x1b530b(0x18a)](_0x21d1cf[_0x1b530b(0x181)],templateButtons,{'quoted':_0x21d1cf});else{if(aliveImgUrl[_0x1b530b(0x182)](_0x1b530b(0x1a2)))templateButtons={'image':{'url':aliveImgUrl},'caption':''+_0x3b98ba,'footer':config[_0x1b530b(0x19d)][_0x1b530b(0x17f)],'buttons':_0x45fcce},await _0x4e6530[_0x1b530b(0x18a)](_0x21d1cf[_0x1b530b(0x181)],templateButtons,{'quoted':_0x21d1cf});else aliveImgUrl['endsWith']('.jpeg')?(templateButtons={'image':{'url':aliveImgUrl},'caption':''+_0x3b98ba,'footer':config[_0x1b530b(0x19d)][_0x1b530b(0x17f)],'buttons':_0x45fcce},await _0x4e6530[_0x1b530b(0x18a)](_0x21d1cf[_0x1b530b(0x195)],templateButtons,{'quoted':_0x21d1cf})):await _0x4e6530[_0x1b530b(0x18a)](_0x21d1cf[_0x1b530b(0x181)],{'text':aliveTxt+_0x1b530b(0x18e)+_0x27ac4a+'\x0a\x0afor\x20adding\x20your\x20own\x20datas\x20like\x20coustmized\x20button\x0atype\x20the\x20same\x20type\x20as\x20wahts\x20you\x20want\x0a\x0aset-alive-value\x20\x20imgurl;alivetxt;buttonName1;2\x0a\x0aCurrentValue\x20:'+Config['ALIVE_DATA']+_0x1b530b(0x17c)},{'quoted':_0x21d1cf});}}));function _0x4cea(){const _0x4fd7ae=['1694346XzjnxZ','exif','576auVByf','ALIVE_DATA','alive','#myUsers','.jpg','all','length','#Insta','4650hAthbf','GIT','#Insult','#Hits','Asia/kolkata','includes','#Sender','\x0a\x0aif\x20need\x20coustmized\x20texts\x20like\x20Quita;insult;Inst_Url..\x20\x0a\x0a\x20add\x20whats\x20you\x20want\x20*withStarting#*\x20\x0a_ex_:Quita\x20:#Quita\x20\x0a\x20note\x20thet\x20the\x20fisrt\x20letter\x20is\x20_capitel_\x0a\x0avalues\x20is\x20:#Hits,#Sender,#Insult#Quita...\x0a#Insta,\x20#Yt,\x20#Git,','to\x20check\x20the\x20bot\x20status','INSTAGRAM','footer','763935XHTtpF','from','endsWith','16157376IKuDzt','system_status','bot','#date','hits','toLocaleString','27349DnjeZL','sendMessage','#host','pushName','split','\x0a\x0aiam\x20alive\x20Bro\x20','replace','mydb','3398952fBEkHH','hostname','ɪɴꜱᴛᴀɢʀᴀᴍ','.mp4','sender','1872moVhav','2317160FbUlUx','push','system','#Git','#Quita'];_0x4cea=function(){return _0x4fd7ae;};return _0x4cea();}

//ending automation

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+Config.PACKNAME+'\n' // full name
            + 'ORG:'+Config.FOOTER+';\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+Config.SUDO+':'+Config.SUDO+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 inrl({pattern: ['owner'], desc: "to check whether", sucReact: "🥺", category: ['all']},   async (message, client) => {
 await client.sendMessage( message.from, { contacts:{ displayName:`${Config.BOT_INFO.split(",")[0]}`, contacts: [{ vcard }],}})
});
inrl(
  {
    pattern: ["script"],
    desc: "to check the bot status",
    sucReact: "🥵",
    category: ["system", "all"],
  },
  async (message, client) => {
      const Message = {
      image: { url: config.image.url.D_E_TMB },
      caption: `╭═══〘${Config.BOT_INFO.split(",")[0]}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴏᴡɴᴇʀ :${Config.BOT_INFO.split(",")[1]}
┃☯︎│ ᴜꜱᴇʀ : ${message.client.pushName}
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${Config.VERSION}
┃☯︎│ ɢɪᴛʜᴜʙ :`+Config.GIT+`
┃☯︎│ ᴡᴇʙꜱɪᴛᴇ :`+Config.WEB+`
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ :`+Config.VIDEO+`
┃☯︎│ yᴏᴜᴛᴜʙᴇ :`+Config.YT+`
┃☯︎│
┃☯︎╰───────────────
╰═════════════════⊷`
    };
    await client.sendMessage(message.from, Message, { quoted: message });
});
const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo", }

bots.inrl({ pattern: ["menu", 'help',"list"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = 
`╭═══〘`+Config.BOT_INFO.split(',')[0]+`〙═══⊷❍
│
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "│➪" + prefix + cmd + ' ' +"\n"+"│"+ command.desc + "\n│\n")}
    }); 
    CMD_HELP += "│\n│ ✰"+`${Config.BOT_INFO.split(',')[0]}`+"✰\n╰═════════════════⊷";
   
  const buttons = [
        { buttonId: ".ping", buttonText: { displayText: "ᴩɪɴɢ"}, type: 1, },
        { buttonId: ".owner", buttonText: { displayText: "ᴏᴡɴᴇʀ"}, type: 1, },
        { buttonId: ".git", buttonText: { displayText: "ɢɪᴛʜᴜʙ"}, type: 1, },
      ]

const templateButtons = {
      image: { url: Config.ALIVE_DATA.split(';')[0] },
      caption: CMD_HELP,
      footer: bots.config.exif.footer,
      buttons,
    };
  
    await client.sendMessage( message.from,templateButtons,{ quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
});
bots.categories.map(category => {
  if (category == 'all') return;
  bots.inrl({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = 
`╭═══〘${Config.BOT_INFO.split(',')[1]}〙═══⊷❍
│
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP += "│ *➪* ```" + prefix + cmd + ' '+"\n"+"│```\n")}
    }); 
    CMD_HELP += "│\n│ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${Config.BOT_INFO.split(',')[0]}\n╰═════════════════⊷";
    await client.sendMessage( message.from,{ image: { url: Config.ALIVE_DATA.split(';')[0] }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
  });
})


bots.inrl({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: bots.infoMessage('Counting commands 💯') }, { quoted: bots.config.quoted.product });
    let all_cmd = 0;
    let visible_cmd = 0;
    let invisible_cmd = 0;
    let search_cmd = 0;
    let downloade_cmd = 0;
    let chat_cmd = 0;
    let system_cmd = 0;
    let fun_cmd = 0;
    let eighteenplus_cmd = 0;
    let owner_cmd = 0;
    let create_cmd = 0;
    let group_cmd = 0;
    let logo_cmd = 0;
    let countcmdOfCmd = 0;
    bots.commands.map(command => {
      if (command.category.includes("all")) all_cmd += command.pattern.length;
      if (!command.dontAddCommandList) visible_cmd += command.pattern.length;
      if (command.dontAddCommandList) invisible_cmd += command.pattern.length;
      if (command.category.includes("search")) search_cmd += command.pattern.length;
      if (command.category.includes("downloade")) downloade_cmd += command.pattern.length;
      if (command.category.includes("chat")) chat_cmd += command.pattern.length;
      if (command.category.includes("system")) system_cmd += command.pattern.length;
      if (command.category.includes("fun")) fun_cmd += command.pattern.length;
      if (command.category.includes("18+")) eighteenplus_cmd += command.pattern.length;
      if (command.category.includes("owner")) owner_cmd += command.pattern.length; 
      if (command.category.includes("create")) create_cmd += command.pattern.length; 
      if (command.category.includes("group")) group_cmd += command.pattern.length; 
      if (command.category.includes("logo")) logo_cmd += command.pattern.length; 
      countcmdOfCmd += command.pattern.length;
    });
    let text = `------- Command Count -------

𖠌 All Commands: ${all_cmd.toString()}
𖠌 Visible Commands: ${visible_cmd.toString()}
𖠌 Invisible Commands: ${invisible_cmd.toString()}
𖠌 Search Commands: ${system_cmd.toString()}
𖠌 Downloade Commands: ${downloade_cmd.toString()}
𖠌 Chat Commands: ${chat_cmd.toString()}
𖠌 System Commands: ${system_cmd.toString()}
𖠌 Fun Commands: ${fun_cmd.toString()}
𖠌 Adult Commands: ${eighteenplus_cmd.toString()}
𖠌 Owner Commands: ${owner_cmd.toString()}
𖠌 Create Commands: ${create_cmd.toString()}
𖠌 Group Commands: ${group_cmd.toString()}
𖠌 Logo Commands: ${logo_cmd.toString()}

💢 Count Of All Commands: ${countcmdOfCmd.toString()}
`;
    const buttons = [
      { buttonId: ".extra_urls", buttonText: { displayText: "urls" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "system menu" }, type: 1, },
    ];
    const Message = {
      image: { url: bots.config.image.url.D_E_DP_ },
      caption: text,
      footer: bots.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    bots.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});
const GDM = "it sends good morning message";
const GDN = "it sends Night message";

inrl(
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "💖", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "❀🍃Good❀ ❀morning❀🥰❀ ";
    r_text[1] = "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐 ";
    r_text[2] = "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰 ";
    r_text[3] = "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸 ";
    r_text[4] = "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞 ";
    r_text[5] = "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶 ";
    r_text[6] = "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰 ";
    const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

inrl(
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "💖", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
r_text[0] = "😻ɢᴏᴏᴅ 💗ᴇᴠᴇɴɪɴɢ",
r_text[1] = "❣️𝐺𝛩𝛩𝐷 💓𝛯𝛻𝛯𝛮𝛪𝛮𝐺",
r_text[2] = "🥰ｇｏｏｄ 💞ｅｖｅｎｉｎｇ",
r_text[3] = "🥳𝓰𝓸𝓸𝓭 💝𝓮𝓿𝓮𝓷𝓲𝓷𝓰",
r_text[4] = "😍ムののり 💘乇√乇刀ﾉ刀ム",
r_text[5] = "🤩ᎶᎧᎧᎴ 💕ᏋᏉᏋᏁᎥᏁᎶ",
r_text[6] = "😛 ɠơơɖ 💔ɛ۷ɛŋıŋɠ"
const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

inrl(
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "💖", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
    r_text[1] = "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
    r_text[1] = "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
    r_text[3] = "😘ցօօժ ⭐️ղíցհԵ 💝";
    r_text[4] = "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
inrl(
  { pattern: ["ga", "gdafternoon", "goodafternoon","gda",], desc: GDN, sucReact: "💖", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘Ꮆㄖㄖᗪ 🥵卂千ㄒ乇尺几ㄖㄖ几💫✨";
    r_text[1] = "🤗𝙂𝙤𝙤𝙙 💖𝙖𝙛𝙩𝙚𝙧𝙣𝙤𝙤𝙣❄️✨";
    r_text[1] = "♢♞  𝐆Ⓞ𝐨๔ 𝐀ƒт𝔢𝓇Ňｏ𝐎ภ  💲🎀";
    r_text[3] = "😘ɢᴏᴏᴅ ⭐️ᴀꜰᴛᴇʀɴᴏᴏɴ 💝";
    r_text[4] = "🌃₲ØØĐ  🙈₳₣₮ɆⱤ₦ØØ₦💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
