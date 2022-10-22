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

const _0x4bbcd0=_0x1757;(function(_0x16e8d2,_0x292025){const _0x4f09a7=_0x1757,_0x152cfc=_0x16e8d2();while(!![]){try{const _0xfd0f28=-parseInt(_0x4f09a7(0x214))/0x1+-parseInt(_0x4f09a7(0x220))/0x2+parseInt(_0x4f09a7(0x1d9))/0x3*(parseInt(_0x4f09a7(0x241))/0x4)+-parseInt(_0x4f09a7(0x1f7))/0x5+parseInt(_0x4f09a7(0x217))/0x6*(parseInt(_0x4f09a7(0x23f))/0x7)+parseInt(_0x4f09a7(0x1f1))/0x8*(-parseInt(_0x4f09a7(0x211))/0x9)+-parseInt(_0x4f09a7(0x230))/0xa*(-parseInt(_0x4f09a7(0x22d))/0xb);if(_0xfd0f28===_0x292025)break;else _0x152cfc['push'](_0x152cfc['shift']());}catch(_0xf8fd90){_0x152cfc['push'](_0x152cfc['shift']());}}}(_0x51cc,0xb4986));function _0x1757(_0x301d06,_0x3d9bca){const _0x51ccc2=_0x51cc();return _0x1757=function(_0x1757af,_0x49e3b9){_0x1757af=_0x1757af-0x1d9;let _0x10f30e=_0x51ccc2[_0x1757af];return _0x10f30e;},_0x1757(_0x301d06,_0x3d9bca);}function _0x51cc(){const _0x9f86fd=['-menu','system','floor','\x0a\x20┃\x20\x20│\x20\x20User\x20:\x20','inrl','fun','D_E_DP_','248IwOcOY','.owner','\x0a𖠌\x20Invisible\x20Commands:\x20','image','\x0a\x20┃\x20\x20│\x20\x20github\x20:\x20','catchError','6949010TEHZvn','menu','pushName','random','.mp4','split','ᴏᴡɴᴇʀ','sendErrorMessage','infoMessage','footer','group','VERSION','_whats','\x0a𖠌\x20Chat\x20Commands:\x20','ᴩɪɴɢ','\x0a\x20┃\x20\x20│\x20\x20Plugins\x20:\x20','commands','toString','\x0a𖠌\x20Group\x20Commands:\x20','\x20┃\x20\x20╰─═════════════⊷❍\x0a\x20╰══════════════════⊷❍','../lib/perfix','dontAddCommandList','GIT','\x0a\x20┃\x20\x20│\x20\x20you\x20Tube\x20:\x20','includes','WEB','72081jKSRrK','Chat','getString','1102320GXlfKt','sendMessage','Create','750knblQE','\x0a\x20┃\x20\x20│\x20\x20webSite\x20:\x20','\x20╭═══〘\x20','\x0a\x20┃\x20\x20│\x20\x20Disk\x20Space:\x20620\x20GB\x0a\x20┃\x20\x20│\x20\x20Version:\x20','Fun','\x0a💢\x20Count\x20Of\x20All\x20Commands:\x20','key','\x0a\x20┃\x20\x20│\x0a\x20┃\x20\x20╰───────────────\x0a\x20┃\x20\x20╭════〘\x20all-cmds\x20〙═══⊷❍\x0a','help','2420294UitAMh','Counting\x20commands\x20💯','list','category','Logo','config','.extra_urls','All','.ping','error\x20while\x20img\x20capturing','Owner','chat','.system-menu','26903921uZgXRd','.jpg','map','10awRyOW','ɢɪᴛʜᴜʙ','\x0a𖠌\x20Fun\x20Commands:\x20','endsWith','BOT_INFO','\x0a\x20┃\x20\x20│\x0a\x20┃\x20\x20│\x20\x20\x20\x20','categories','owner',';\x0a\x20┃\x20\x20│\x20\x20Disk\x20Space:\x20620\x20GB\x0a\x20┃\x20\x20│\x20\x20Version:\x20','product','length','all','\x0a𖠌\x20Visible\x20Commands:\x20','\x0a𖠌\x20System\x20Commands:\x20','urls','80500MBRcxJ','18+','60rNcxwm','\x0a𖠌\x20Owner\x20Commands:\x20','client','161391WmznEf','APP_NAME','Search','\x0a𖠌\x20Downloade\x20Commands:\x20','exif','quoted','Group','cmds-count','system\x20menu','System','\x0a𖠌\x20Logo\x20Commands:\x20','ALIVE_DATA','.jpeg','pattern','prefix','from','HEROKU'];_0x51cc=function(){return _0x9f86fd;};return _0x51cc();}const bots=require(_0x4bbcd0(0x20b)),Lang=bots[_0x4bbcd0(0x213)](_0x4bbcd0(0x203));let cTitle={'search':_0x4bbcd0(0x1db),'all':_0x4bbcd0(0x227),'downloade':'Downloade','chat':_0x4bbcd0(0x212),'inrl':'Inrl','ibot':'Ibot','system':_0x4bbcd0(0x1e2),'fun':_0x4bbcd0(0x21b),'18+':'18+','ff:':'Ff','owner':_0x4bbcd0(0x22a),'create':_0x4bbcd0(0x216),'group':_0x4bbcd0(0x1df),'logo':_0x4bbcd0(0x224)};bots[_0x4bbcd0(0x1ee)]({'pattern':[_0x4bbcd0(0x1f8),_0x4bbcd0(0x21f),_0x4bbcd0(0x222)],'desc':Lang['DESCC'],'sucReact':'📰','category':[_0x4bbcd0(0x23b),'system']},async(_0x42637b,_0x438fd5)=>{const _0x13694e=_0x4bbcd0;var _0x2d8dad=new Array();_0x2d8dad[0x0]='22',_0x2d8dad[0x1]='23',_0x2d8dad[0x1]='24',_0x2d8dad[0x3]='57',_0x2d8dad[0x4]='1',_0x2d8dad[0x5]='36',_0x2d8dad[0x6]='37',_0x2d8dad[0x7]='38',_0x2d8dad[0x8]='39',_0x2d8dad[0x9]='41',_0x2d8dad[0xa]='39',_0x2d8dad[0xb]='41';const _0x1213d8=Math[_0x13694e(0x1ec)](0xb*Math[_0x13694e(0x1fa)]());let _0x460bff=_0x2d8dad[_0x1213d8],_0x16dfdb=0x0;try{let _0x408fd4=new String();if(!_0x42637b[_0x13694e(0x243)]['prefix']||!_0x42637b[_0x13694e(0x243)][_0x13694e(0x1e7)][_0x13694e(0x23a)]==0x1)_0x408fd4='.';bots[_0x13694e(0x207)][_0x13694e(0x22f)](_0x32b6b3=>{const _0x60f461=_0x13694e;_0x16dfdb+=_0x32b6b3[_0x60f461(0x1e6)][_0x60f461(0x23a)];});let _0x53d9da=_0x13694e(0x219)+Config[_0x13694e(0x234)]['split'](',')[0x0]+'\x20〙═══⊷❍\x0a\x20┃\x0a\x20┃\x20\x20╭════〘\x20about\x20〙════⊷❍\x0a\x20┃\x20\x20│\x0a\x20┃\x20\x20│\x20\x20Owner\x20:\x20'+Config[_0x13694e(0x234)][_0x13694e(0x1fc)](',')[0x1]+'\x0a\x20┃\x20\x20│\x20\x20User\x20:\x20'+_0x42637b[_0x13694e(0x243)][_0x13694e(0x1f9)]+_0x13694e(0x218)+Config[_0x13694e(0x210)]+'\x0a\x20┃\x20\x20│\x20\x20Server\x20:\x20'+Config['HEROKU'][_0x13694e(0x1da)]+_0x13694e(0x1f5)+Config[_0x13694e(0x20d)]+_0x13694e(0x20e)+Config['YT']+_0x13694e(0x206)+_0x16dfdb['toString']()+_0x13694e(0x238)+Config[_0x13694e(0x202)]+'\x0a\x20┃\x20\x20│\x20\x0a\x20┃\x20\x20│\x20\x20\x20▎▍▌▌▉▏▎▌▉▐▏▌▎\x0a\x20┃\x20\x20│\x20\x20\x20\x20'+Config[_0x13694e(0x234)][_0x13694e(0x1fc)](',')[0x0]+'\x0a\x20┃\x20\x20│\x0a\x20┃\x20\x20╰───────────────\x0a\x20┃\x20\x20╭════〘\x20all-cmds\x20〙═══⊷❍\x0a';bots['commands']['map'](_0x146327=>{const _0x4aad25=_0x13694e;if(_0x146327[_0x4aad25(0x20c)]||_0x146327['pattern']===undefined||_0x146327[_0x4aad25(0x1e6)]===null)return;_0x146327[_0x4aad25(0x223)][_0x4aad25(0x20f)](_0x4aad25(0x23b))&&_0x146327[_0x4aad25(0x1e6)][_0x4aad25(0x22f)](_0xe3aef8=>_0x53d9da+='\x20┃\x20\x20│\x20\x20\x20\x20\x20\x20'+styletext(_0xe3aef8,_0x460bff)+'\x0a');}),_0x53d9da+=_0x13694e(0x20a);const _0x4c4e93=[{'buttonId':_0x13694e(0x228),'buttonText':{'displayText':_0x13694e(0x205)},'type':0x1},{'buttonId':_0x13694e(0x1f2),'buttonText':{'displayText':_0x13694e(0x1fd)},'type':0x1},{'buttonId':'.git','buttonText':{'displayText':_0x13694e(0x231)},'type':0x1}];var _0x26b530,_0x5928b0;const _0x1392ba=Config[_0x13694e(0x1e4)];if(_0x1392ba[_0x13694e(0x20f)](';')){var _0xad1a37=_0x1392ba['split'](';');_0x5928b0=_0xad1a37[0x0];}if(_0x5928b0[_0x13694e(0x233)](_0x13694e(0x1fb)))_0x26b530={'text':_0x53d9da,'footer':config[_0x13694e(0x1dd)][_0x13694e(0x200)],'templateButtons':_0x4c4e93,'video':{'url':_0x5928b0}},await _0x438fd5[_0x13694e(0x215)](_0x42637b['from'],_0x26b530);else{if(_0x5928b0[_0x13694e(0x233)](_0x13694e(0x22e)))_0x26b530={'image':{'url':_0x5928b0},'caption':_0x53d9da,'footer':config[_0x13694e(0x1dd)]['footer'],'buttons':_0x4c4e93},await _0x438fd5[_0x13694e(0x215)](_0x42637b[_0x13694e(0x1e8)],_0x26b530,{'quoted':_0x42637b});else _0x5928b0[_0x13694e(0x233)](_0x13694e(0x1e5))?(_0x26b530={'image':{'url':_0x5928b0},'caption':_0x53d9da,'footer':config[_0x13694e(0x1dd)][_0x13694e(0x200)],'buttons':_0x4c4e93},await _0x438fd5['sendMessage'](_0x42637b[_0x13694e(0x1e8)],_0x26b530,{'quoted':_0x42637b})):await _0x438fd5['sendMessage'](_0x42637b['from'],{'text':_0x13694e(0x229)},{'quoted':_0x42637b});}global['catchError']=![];}catch(_0x552ce8){return global[_0x13694e(0x1f6)]=!![],await _0x438fd5[_0x13694e(0x1fe)](_0x42637b[_0x13694e(0x1e8)],_0x552ce8,_0x42637b[_0x13694e(0x21d)],_0x42637b);}}),bots[_0x4bbcd0(0x236)]['map'](_0x432c17=>{const _0x479bcd=_0x4bbcd0;if(_0x432c17==_0x479bcd(0x23b))return;bots[_0x479bcd(0x1ee)]({'pattern':[_0x432c17+_0x479bcd(0x1ea)],'sucReact':'📰','category':[_0x479bcd(0x23b),_0x479bcd(0x1eb)]},async(_0x5c7826,_0x38d22d)=>{const _0x44f2a8=_0x479bcd;try{let _0x3e21d1=new String();if(!_0x5c7826[_0x44f2a8(0x243)][_0x44f2a8(0x1e7)]||!_0x5c7826[_0x44f2a8(0x243)][_0x44f2a8(0x1e7)][_0x44f2a8(0x23a)]==0x1)_0x3e21d1='.';let _0x5da23b=_0x44f2a8(0x219)+Config['BOT_INFO'][_0x44f2a8(0x1fc)](',')[0x0]+'\x20〙═══⊷❍\x0a\x20┃\x0a\x20┃\x20\x20╭════〘\x20about\x20〙════⊷❍\x0a\x20┃\x20\x20│\x0a\x20┃\x20\x20│\x20\x20Owner\x20:\x20'+Config['BOT_INFO'][_0x44f2a8(0x1fc)](',')[0x1]+_0x44f2a8(0x1ed)+_0x5c7826[_0x44f2a8(0x243)][_0x44f2a8(0x1f9)]+_0x44f2a8(0x218)+Config[_0x44f2a8(0x210)]+'\x0a\x20┃\x20\x20│\x20\x20Server\x20:\x20'+Config[_0x44f2a8(0x1e9)]['APP_NAME']+_0x44f2a8(0x21a)+Config[_0x44f2a8(0x202)]+_0x44f2a8(0x235)+Config[_0x44f2a8(0x234)]['split'](',')[0x0]+_0x44f2a8(0x21e);bots[_0x44f2a8(0x207)][_0x44f2a8(0x22f)](_0x42992b=>{const _0x23c573=_0x44f2a8;if(_0x42992b[_0x23c573(0x20c)]||_0x42992b['pattern']===undefined||_0x42992b[_0x23c573(0x1e6)]===null)return;_0x42992b[_0x23c573(0x223)][_0x23c573(0x20f)](_0x432c17)&&_0x42992b[_0x23c573(0x1e6)][_0x23c573(0x22f)](_0x59a436=>_0x5da23b+='\x20┃\x20\x20│\x20\x20\x20\x20\x20\x20'+_0x59a436+'\x0a');}),_0x5da23b+=_0x44f2a8(0x20a),await _0x38d22d[_0x44f2a8(0x215)](_0x5c7826[_0x44f2a8(0x1e8)],{'image':{'url':Config[_0x44f2a8(0x1e4)]['split'](';')[0x0]},'caption':_0x5da23b},{'quoted':_0x5c7826}),global[_0x44f2a8(0x1f6)]=![];}catch(_0x5742c9){return global[_0x44f2a8(0x1f6)]=!![],await _0x38d22d[_0x44f2a8(0x1fe)](_0x5c7826[_0x44f2a8(0x1e8)],_0x5742c9,_0x5c7826[_0x44f2a8(0x21d)],_0x5c7826);}});}),bots[_0x4bbcd0(0x1ee)]({'pattern':[_0x4bbcd0(0x1e0)],'sucReact':'🆗','category':[_0x4bbcd0(0x23b),_0x4bbcd0(0x1eb)]},async(_0x366577,_0x153deb)=>{const _0x368a14=_0x4bbcd0;try{await _0x153deb['sendMessage'](_0x366577[_0x368a14(0x1e8)],{'text':bots[_0x368a14(0x1ff)](_0x368a14(0x221))},{'quoted':bots[_0x368a14(0x225)][_0x368a14(0x1de)][_0x368a14(0x239)]});let _0x533f50=0x0,_0x311700=0x0,_0x31c165=0x0,_0x4bda3d=0x0,_0x197fb0=0x0,_0x532c62=0x0,_0x3ab18d=0x0,_0x44d048=0x0,_0x12519e=0x0,_0x29fd75=0x0,_0x29dafe=0x0,_0x3d340b=0x0,_0x4b5fe7=0x0,_0x3c0aa8=0x0;bots[_0x368a14(0x207)][_0x368a14(0x22f)](_0x2389cd=>{const _0x4a6d0a=_0x368a14;if(_0x2389cd['category'][_0x4a6d0a(0x20f)]('all'))_0x533f50+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(!_0x2389cd['dontAddCommandList'])_0x311700+=_0x2389cd[_0x4a6d0a(0x1e6)]['length'];if(_0x2389cd[_0x4a6d0a(0x20c)])_0x31c165+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd[_0x4a6d0a(0x223)][_0x4a6d0a(0x20f)]('search'))_0x4bda3d+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd['category']['includes']('downloade'))_0x197fb0+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd['category'][_0x4a6d0a(0x20f)](_0x4a6d0a(0x22b)))_0x532c62+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd[_0x4a6d0a(0x223)][_0x4a6d0a(0x20f)](_0x4a6d0a(0x1eb)))_0x3ab18d+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd[_0x4a6d0a(0x223)][_0x4a6d0a(0x20f)](_0x4a6d0a(0x1ef)))_0x44d048+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd[_0x4a6d0a(0x223)][_0x4a6d0a(0x20f)](_0x4a6d0a(0x240)))_0x12519e+=_0x2389cd['pattern'][_0x4a6d0a(0x23a)];if(_0x2389cd['category'][_0x4a6d0a(0x20f)](_0x4a6d0a(0x237)))_0x29fd75+=_0x2389cd[_0x4a6d0a(0x1e6)]['length'];if(_0x2389cd['category'][_0x4a6d0a(0x20f)]('create'))_0x29dafe+=_0x2389cd[_0x4a6d0a(0x1e6)]['length'];if(_0x2389cd[_0x4a6d0a(0x223)]['includes'](_0x4a6d0a(0x201)))_0x3d340b+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];if(_0x2389cd['category']['includes']('logo'))_0x4b5fe7+=_0x2389cd[_0x4a6d0a(0x1e6)][_0x4a6d0a(0x23a)];_0x3c0aa8+=_0x2389cd[_0x4a6d0a(0x1e6)]['length'];});let _0x553fa5='-------\x20Command\x20Count\x20-------\x0a𖠌\x20All\x20Commands:\x20'+_0x533f50[_0x368a14(0x208)]()+_0x368a14(0x23c)+_0x311700[_0x368a14(0x208)]()+_0x368a14(0x1f3)+_0x31c165[_0x368a14(0x208)]()+'\x0a𖠌\x20Search\x20Commands:\x20'+_0x3ab18d[_0x368a14(0x208)]()+_0x368a14(0x1dc)+_0x197fb0[_0x368a14(0x208)]()+_0x368a14(0x204)+_0x532c62[_0x368a14(0x208)]()+_0x368a14(0x23d)+_0x3ab18d[_0x368a14(0x208)]()+_0x368a14(0x232)+_0x44d048['toString']()+'\x0a𖠌\x20Adult\x20Commands:\x20'+_0x12519e['toString']()+_0x368a14(0x242)+_0x29fd75[_0x368a14(0x208)]()+'\x0a𖠌\x20Create\x20Commands:\x20'+_0x29dafe['toString']()+_0x368a14(0x209)+_0x3d340b[_0x368a14(0x208)]()+_0x368a14(0x1e3)+_0x4b5fe7[_0x368a14(0x208)]()+_0x368a14(0x21c)+_0x3c0aa8[_0x368a14(0x208)]()+'\x0a';const _0x4554b2=[{'buttonId':_0x368a14(0x226),'buttonText':{'displayText':_0x368a14(0x23e)},'type':0x1},{'buttonId':_0x368a14(0x22c),'buttonText':{'displayText':_0x368a14(0x1e1)},'type':0x1}],_0x516160={'image':{'url':bots[_0x368a14(0x225)][_0x368a14(0x1f4)]['url'][_0x368a14(0x1f0)]},'caption':_0x553fa5,'footer':bots[_0x368a14(0x225)][_0x368a14(0x1dd)][_0x368a14(0x200)],'buttons':_0x4554b2};await _0x153deb[_0x368a14(0x215)](_0x366577[_0x368a14(0x1e8)],_0x516160,{'quoted':_0x366577}),global['catchError']=![];}catch(_0x15dd56){global[_0x368a14(0x1f6)]=!![];let _0x2bb0b7=0x0;return bots['commands'][_0x368a14(0x22f)](_0x18973f=>{const _0x1cbb4d=_0x368a14;_0x2bb0b7+=_0x18973f[_0x1cbb4d(0x1e6)][_0x1cbb4d(0x23a)];}),await _0x153deb[_0x368a14(0x215)](_0x366577['from'],{'text':_0x2bb0b7[_0x368a14(0x208)]()},{'quoted':_0x366577}),await _0x153deb[_0x368a14(0x1fe)](_0x366577[_0x368a14(0x1e8)],_0x15dd56,_0x366577[_0x368a14(0x21d)],_0x366577);}});

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
