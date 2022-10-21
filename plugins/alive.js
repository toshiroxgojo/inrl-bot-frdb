var NewGen, templateButtons;
const os = require("os");
const fs = require('fs');
const speed = require("performance-now");
const  { inrl , config, inrlQuita, insult, randomStyle, styletext, listall, tiny, fetchJson }= require('../lib/')
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

function _0x3138(){const _0x1b3883=['#date','#host','.jpeg','endsWith','3960CsaQNY','ALIVE_DATA','8zqvtEc','all','footer','.jpg','Asia/kolkata','GIT','5PYeZIS','system','@Style','sendMessage','bot','#Insta','hostname','#myUsers','6199710zNugSV','push','includes','1184204olCXWP','#Git','sender','exif','ɪɴꜱᴛᴀɢʀᴀᴍ','users','pushName','system_status','7480KtwWlv','mydb','6829543qLLJSu','#Insult','#Hits','length','964728UdbBEc','#Yt','INSTAGRAM','167904mpEDUo','2457556SAqCZU','#Quita','1lcAdrK','#Sender','from','\x0a\x0aiam\x20alive\x20Bro\x20','replace','client','toLocaleString','253cilpGX','alive','\x0a\x0afor\x20adding\x20your\x20own\x20datas\x20like\x20coustmized\x20button\x0atype\x20the\x20same\x20type\x20as\x20wahts\x20you\x20want\x0a\x0aset-alive-value\x20\x20imgurl;alivetxt;buttonName1;2\x0a\x0aCurrentValue\x20:'];_0x3138=function(){return _0x1b3883;};return _0x3138();}function _0x23c5(_0x3f70e6,_0x458251){const _0x31385d=_0x3138();return _0x23c5=function(_0x23c5ca,_0x7d6395){_0x23c5ca=_0x23c5ca-0xa7;let _0x316408=_0x31385d[_0x23c5ca];return _0x316408;},_0x23c5(_0x3f70e6,_0x458251);}const _0x438714=_0x23c5;(function(_0x2139b8,_0x588ba7){const _0x1e3e9e=_0x23c5,_0x4dddef=_0x2139b8();while(!![]){try{const _0x326cb8=-parseInt(_0x1e3e9e(0xac))/0x1*(parseInt(_0x1e3e9e(0xaa))/0x2)+parseInt(_0x1e3e9e(0xa9))/0x3+parseInt(_0x1e3e9e(0xcd))/0x4*(parseInt(_0x1e3e9e(0xc2))/0x5)+parseInt(_0x1e3e9e(0xca))/0x6+-parseInt(_0x1e3e9e(0xd7))/0x7*(parseInt(_0x1e3e9e(0xbc))/0x8)+-parseInt(_0x1e3e9e(0xba))/0x9*(parseInt(_0x1e3e9e(0xd5))/0xa)+parseInt(_0x1e3e9e(0xb3))/0xb*(parseInt(_0x1e3e9e(0xdb))/0xc);if(_0x326cb8===_0x588ba7)break;else _0x4dddef['push'](_0x4dddef['shift']());}catch(_0x59272b){_0x4dddef['push'](_0x4dddef['shift']());}}}(_0x3138,0xab193),inrl({'pattern':[_0x438714(0xb4),_0x438714(0xc6),_0x438714(0xd4)],'desc':'to\x20check\x20the\x20bot\x20status','sucReact':'🥰','category':[_0x438714(0xc3),_0x438714(0xbd)]},async(_0x38054c,_0x434cb7)=>{const _0x44a1e6=_0x438714,_0x40ce71=await inrlQuita(),_0x130a3e=await insult(),_0x23cc98=_0x38054c[_0x44a1e6(0xb1)][_0x44a1e6(0xd3)],_0x28818e=global[_0x44a1e6(0xd6)]['hits'],_0x499d0a=Config[_0x44a1e6(0xc1)],_0x2a386d=Config['YT'],_0xb6a5fd=Config[_0x44a1e6(0xa8)];let _0x38e0f6=global['mydb'][_0x44a1e6(0xd2)][_0x44a1e6(0xda)],_0x585db3=new Date()[_0x44a1e6(0xb2)]('EN',{'timeZone':_0x44a1e6(0xc0)});;let _0x57dc58=os[_0x44a1e6(0xc8)]();const _0x313886=Config[_0x44a1e6(0xbb)];if(_0x313886[_0x44a1e6(0xcc)](';')){var _0xb2df83=_0x313886['split'](';');aliveImgUrl=_0xb2df83[0x0],aliveTxt=_0xb2df83[0x1],aliveButton1=_0xb2df83[0x2],aliveButton2=_0xb2df83[0x3];}NewGen=aliveTxt;NewGen[_0x44a1e6(0xcc)]('#Quita')&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xab),''+_0x40ce71));NewGen[_0x44a1e6(0xcc)]('#Insult')&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xd8),''+_0x130a3e));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xad))&&(NewGen=NewGen[_0x44a1e6(0xb0)]('#Sender',''+_0x23cc98));NewGen['includes'](_0x44a1e6(0xc9))&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xc9),''+_0x38e0f6));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xd9))&&(NewGen=NewGen[_0x44a1e6(0xb0)]('#myUsers',''+_0x38e0f6));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xb7))&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xb7),''+_0x57dc58));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xb6))&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xb6),''+_0x585db3));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xd9))&&(NewGen=NewGen['replace'](_0x44a1e6(0xd9),''+_0x28818e));NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xce))&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xce),''+_0x499d0a));NewGen['includes'](_0x44a1e6(0xa7))&&(NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xa7),''+_0x2a386d));let _0x5839c5=[],_0x39af8b={'buttonId':'1','buttonText':{'displayText':aliveButton1},'type':0x1},_0x1f8fd9={'buttonId':'2','buttonText':{'displayText':aliveButton2},'type':0x1};if(NewGen[_0x44a1e6(0xcc)](_0x44a1e6(0xc7))){NewGen=NewGen[_0x44a1e6(0xb0)](_0x44a1e6(0xc7),'');let _0x202d4c={'index':0x1,'urlButton':{'displayText':_0x44a1e6(0xd1),'url':_0xb6a5fd}};await _0x5839c5[_0x44a1e6(0xcb)](_0x202d4c);}_0x5839c5[_0x44a1e6(0xcb)](_0x39af8b),_0x5839c5[_0x44a1e6(0xcb)](_0x1f8fd9);_0x313886[_0x44a1e6(0xcc)](_0x44a1e6(0xc4))&&(NewGen=NewGen['replace'](_0x44a1e6(0xc4),''),NewGen=randomStyle(NewGen));let _0x580dfe=''+NewGen;if(aliveImgUrl[_0x44a1e6(0xb9)]('.mp4'))templateButtons={'video':{'url':aliveImgUrl},'caption':''+_0x580dfe,'footer':config[_0x44a1e6(0xd0)]['footer'],'buttons':_0x5839c5},await _0x434cb7['sendMessage'](_0x38054c['from'],templateButtons,{'quoted':_0x38054c});else{if(aliveImgUrl[_0x44a1e6(0xb9)](_0x44a1e6(0xbf)))templateButtons={'image':{'url':aliveImgUrl},'caption':''+_0x580dfe,'footer':config[_0x44a1e6(0xd0)]['footer'],'buttons':_0x5839c5},await _0x434cb7[_0x44a1e6(0xc5)](_0x38054c['from'],templateButtons,{'quoted':_0x38054c});else aliveImgUrl[_0x44a1e6(0xb9)](_0x44a1e6(0xb8))?(templateButtons={'image':{'url':aliveImgUrl},'caption':''+_0x580dfe,'footer':config[_0x44a1e6(0xd0)][_0x44a1e6(0xbe)],'buttons':_0x5839c5},await _0x434cb7['sendMessage'](_0x38054c[_0x44a1e6(0xcf)],templateButtons,{'quoted':_0x38054c})):await _0x434cb7['sendMessage'](_0x38054c[_0x44a1e6(0xae)],{'text':aliveTxt+_0x44a1e6(0xaf)+_0x23cc98+_0x44a1e6(0xb5)+Config[_0x44a1e6(0xbb)]+'\x0a\x0aif\x20need\x20coustmized\x20texts\x20like\x20Quita;insult;Inst_Url..\x20\x0a\x0a\x20add\x20whats\x20you\x20want\x20*withStarting#*\x20\x0a_ex_:Quita\x20:#Quita\x20\x0a\x20note\x20thet\x20the\x20fisrt\x20letter\x20is\x20_capitel_\x0a\x0avalues\x20is\x20:#Hits,#Sender,#Insult#Quita...\x0a#Insta,\x20#Yt,\x20#Git,'},{'quoted':_0x38054c});}}));

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
    CMD_HELP += "│\n│ ᴄʀᴇᴀᴛᴇᴅ ʙʏ "+`${Config.BOT_INFO.split(',')[0]}`+"\n╰═════════════════⊷";
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
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "💖", category: ["chat"] },
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
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "💖", category: ["chat"] },
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
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "💖", category: ["chat"] },
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
  { pattern: ["ga", "gdafternoon", "goodafternoon","gda",], desc: GDN, sucReact: "💖", category: ["chat"] },
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
inrl(
	   {
		pattern: ['fancy'],
		desc: 'To convert text to random style as you want',
                sucReact: "🙀",
                category: ["system", "all"],
	   },
	async (message, client) => {
     const text = message.client.text;
if(!text){
let NewText =`
Enter A Text Quary
_ex_ : Enter a text like this *faancy 55,hi*
1 Fᴀɴᴄʏ
2 ʎɔuɐℲ
3 F⃣   a⃣   n⃣   c⃣   y⃣
4 F⃞    a⃞    n⃞    c⃞    y⃞
5 ʏɔᴎɒꟻ
6 F̸̧̥̠͔̯̻̱̋̏̾͗̈́͝a̵̟̠̯̐n̷̡̤̪͓͖̹̯̙͂̊͋̊̈́̐͑̋̏c̴̯̒͆́y̶͖̘̹̦͆̎̑͗͝
7 Ⓕⓐⓝⓒⓨ
8 F̶a̶n̶c̶y̶
9 F̴a̴n̴c̴y̴
10 F̷a̷n̷c̷y̷
11 F̲a̲n̲c̲y̲
12 F̳a̳n̳c̳y̳
13 F♥a♥n♥c♥y
14 F͎a͎n͎c͎y͎
15 F͓̽a͓̽n͓̽c͓̽y͓̽
16 ☞︎♋︎■︎♍︎⍓︎
17 Fａncｙ
18 ҒΔΠCΨ
19 千卂几匚ㄚ
20 ꎇꍏꈤꏳꌩ
21 ቻልክርሃ
22 𝐅𝐚𝐧𝐜𝐲
23 𝑭𝒂𝒏𝒄𝒚
24 𝐹𝑎𝑛𝑐𝑦
25 ᠻꪖꪀᥴꪗ
26 𝙵𝚊𝚗𝚌𝚢
27 fคຖ¢ฯ
28 ʄąŋƈყ
29 ｷﾑ刀ᄃﾘ
30 千卂几匚ㄚ
31 🄵🄰🄽🄲🅈
32 ᎦᏗᏁፈᎩ
33 ᖴᗩᑎᑕY
34 ʄǟռƈʏ
35 𝙵𝚊𝚗𝚌𝚢
36 𝙁𝙖𝙣𝙘𝙮
37 𝗙𝗮𝗻𝗰𝘆
38 𝐅𝐚𝐧𝐜𝐲
39 𝘍𝘢𝘯𝘤𝘺
40 Fαɳƈყ
41 ₣₳₦₵Ɏ
42 £åñ¢¥
43 ƒαη¢у
44 FΛПᄃY
45 Ƒąղçվ
46 Fₐₙcy
47 ᶠᵃⁿᶜʸ
48 Ŧคภςץ
49 𝔽𝕒𝕟𝕔𝕪
50 𝕱𝖆𝖓𝖈𝖞
51 🅵🅰🅽🅲🆈
52 𝓕𝓪𝓷𝓬𝔂
53 𝔉𝔞𝔫𝔠𝔶
54 Ｆａｎｃｙ
55 𝑭𝒂𝒏𝒄𝒚
56 𝐹𝛥𝛮𝐶𝑌
57 𝙁𝞓𝞜𝘾𝙔
58 𝐅𝚫𝚴𝐂𝐘
59 ᖴᗩᑎᑕᎩ
_ex_ : Enter a text like this *faancy 55,hi*`
return await client.sendMessage(message.from, { text : NewText });
    }
  // if (text.includes(',')) {
         var split = text.split(',');
         Num = split[0] || "55";
         Text = split[1] || "enter A text with number ex 31,text";
//}
let ThenText = await styletext(Text, Num)

return await client.sendMessage(message.from, { text : ThenText });
    }
);
inrl({pattern: ['emojiimix'], desc: "to emojis to single sticker",sucReact: "🌇",  category: ["all"]}, async (message, client) => {
           const text = message.client.text;
	    if (!text) return await client.sendMessage( message.from, { text: 'send to emojis \n\n _ex_:❣️+🥵'}, { quoted: message });
if (text.includes('+')) {
         var split = text.split('+');

         emoji1= split[0];
         emoji2 = split[1];
        }
const url = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of url.results) {
//console.log("inrl="+res.url)
await client.sendImageAsSticker(message.from, res.url, message, { packname: "", author: "", categories: res.tags })
        }
});
