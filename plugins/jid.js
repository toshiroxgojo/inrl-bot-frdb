//created by @ inrl
const { inrl } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
inrl(
	   {
		pattern: ['jid'],
		desc: 'To get jid off member',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		return await client.sendMessage( message.from, { text: message.quoted.sender || message.from }, { quoted: message })
                }
);
inrl({
		pattern: ['block'],
		desc: 'To block a person',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
if(!message.client.isCreator) return await client.sendMessage( message.from, { text: "sorry about thets! this cmd only for owner"});
if (message.isGroup) { 
await client.updateBlockStatus(message.quoted, "block") // Block user
}else{
await client.updateBlockStatus(message.from, "block")
    }
}); // Block user
inrl({
		pattern: ['unblock'],
		desc: 'To unblock a person',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
if(!message.client.isCreator) return await client.sendMessage( message.from, { text: "sorry about thets this cmd only for owner"});
if (message.isGroup) { 
await client.updateBlockStatus(message.quoted, "unblock") // Unblock user
}else{
await client.updateBlockStatus(message.from, "unblock") // Unblock user
    }
});
//re edited taggal &tagadmin
function _0x1cd29f(_0x58db1e,_0x54b057,_0x29ee7d,_0x294e2e,_0x4fa1ba){return _0x522d(_0x58db1e- -0x284,_0x29ee7d);}(function(_0x3415c5,_0x1e0877){function _0x34f38e(_0x4a0137,_0x3eee7b,_0x10bb81,_0x4d93fc,_0x37ac73){return _0x522d(_0x37ac73- -0x260,_0x3eee7b);}function _0x31b442(_0x167f13,_0x5b2133,_0x121670,_0x5e7fb8,_0x17098b){return _0x522d(_0x5e7fb8-0x45,_0x5b2133);}function _0x385a21(_0x1d2b48,_0x38ce06,_0x1fd05f,_0x5e33f3,_0x54d1a2){return _0x522d(_0x54d1a2-0x77,_0x1d2b48);}function _0x199ee0(_0x4f896e,_0x4b4226,_0x7dd529,_0x4da704,_0x3662b4){return _0x522d(_0x4f896e-0x113,_0x4b4226);}function _0x5601ba(_0x202b41,_0x2c67ec,_0x420fdf,_0x296537,_0x4ab7c6){return _0x522d(_0x4ab7c6-0x3a0,_0x420fdf);}const _0x5d2880=_0x3415c5();while(!![]){try{const _0x2adbc5=parseInt(_0x5601ba(0x41b,0x42b,0x41b,0x444,0x42d))/(0x1970+-0x1e5*0xa+-0x67d)+parseInt(_0x385a21(0x102,0x111,0x105,0x10f,0x106))/(0x5*0x647+-0x199c+-0x5c5)*(-parseInt(_0x385a21(0x115,0x120,0x12a,0x12a,0x11f))/(-0xa0b+-0x1*0x23ef+0x2dfd))+-parseInt(_0x199ee0(0x1b5,0x1a4,0x1cd,0x1cd,0x1c4))/(-0x1*0x1cd7+0x1ba+0xf*0x1cf)*(parseInt(_0x199ee0(0x1c3,0x1a7,0x1c8,0x1dc,0x1b2))/(0x12*-0x37+-0x223c+0x261f))+-parseInt(_0x34f38e(-0x1a4,-0x1c8,-0x1ad,-0x1c2,-0x1c0))/(0x10d5+-0x688+-0xa47)+-parseInt(_0x5601ba(0x447,0x46a,0x439,0x43f,0x452))/(0x2*-0x60a+-0x1*0x142d+0x2048)+parseInt(_0x199ee0(0x1cd,0x1c5,0x1d3,0x1bb,0x1bf))/(0x1069+0x106f+-0x20d0)*(-parseInt(_0x385a21(0x126,0x112,0x121,0xfc,0x10a))/(0x270a+-0x1*-0xc80+-0x3381*0x1))+parseInt(_0x34f38e(-0x1ac,-0x1bc,-0x1d8,-0x1e0,-0x1c6))/(0x8f4+0x10cb+-0x19b5)*(parseInt(_0x34f38e(-0x1cb,-0x1c6,-0x1d6,-0x1be,-0x1b9))/(0x2*0x133c+0xb69*0x1+0x31d6*-0x1));if(_0x2adbc5===_0x1e0877)break;else _0x5d2880['push'](_0x5d2880['shift']());}catch(_0x3ea90d){_0x5d2880['push'](_0x5d2880['shift']());}}}(_0x207e,0x1*-0x33221+0x9374c+-0xfd1*0xa));function _0x207e(){const _0x17e919=['act','syste','\x20grou','╰────','sucRe','456624zbkFYT','min','8gqXVEE','tagal','NUOrr','from','cipan','10987691QaKnEt','826881NUxTtQ','catch','eoUnO','bSrGM','admin','map','patte','essag','876155cfVRFs','all','757526UFFwvT','│🪀','sDnMr','─────','FMsgs','categ','ber','tagad','1680584wcxVKd','To\x20ta','clien','egnOK','parti','isGro','group','RrCMm','isCre','╭────','sendM','desc','ory','375652YOeyhI','sHAxC','2HBsinq','g\x20all','filte','Metad','9lFTbGR','─⊷❍\x0a','split','p\x20mem','─⊷❍','ata','ator','10yEvttP'];_0x207e=function(){return _0x17e919;};return _0x207e();}const _0x476c69={};_0x476c69[_0x1bb8b9(-0x209,-0x1df,-0x213,-0x207,-0x1f9)+'rn']=[_0x1bb8b9(-0x1f1,-0x211,-0x21c,-0x1f2,-0x204)+'l'],_0x476c69[_0x9cbdf(0x167,0x14c,0x158,0x167,0x142)]=_0x5942b6(0x7f,0x8a,0x9a,0x81,0x7a)+_0x1bb8b9(-0x231,-0x225,-0x201,-0x22d,-0x217)+_0x1cd29f(-0x1e7,-0x1f6,-0x1d4,-0x202,-0x1df)+_0x1bb8b9(-0x21f,-0x1fa,-0x1ff,-0x222,-0x211)+_0x1cd29f(-0x1cc,-0x1ba,-0x1b8,-0x1b5,-0x1d6),_0x476c69[_0x1bb8b9(-0x216,-0x207,-0x1f5,-0x1f3,-0x208)+_0x1bb8b9(-0x226,-0x224,-0x1f6,-0x1f7,-0x20c)]='😄',_0x476c69[_0x9cbdf(0x155,0x149,0x14a,0x14d,0x149)+_0x5942b6(0x50,0x6b,0x4a,0x3f,0x58)]=[_0x47a044(-0xef,-0xeb,-0x106,-0x10c,-0x103)+'m',_0x9cbdf(0x131,0x156,0x144,0x158,0x148)],inrl(_0x476c69,async(_0x28c0ac,_0x181e78)=>{function _0x1b4b55(_0x1a1068,_0x15172a,_0x5d18f6,_0x150164,_0x2a7f16){return _0x1cd29f(_0x2a7f16-0x130,_0x15172a-0xa0,_0x15172a,_0x150164-0xa5,_0x2a7f16-0x55);}function _0x21ed8e(_0xe19a14,_0x358af,_0x5409e8,_0x57e93a,_0x30cee4){return _0x47a044(_0x57e93a-0x20a,_0x358af-0x7c,_0x5409e8-0xf,_0x57e93a-0x191,_0xe19a14);}function _0x4d3cf1(_0x5699db,_0xd86371,_0x421168,_0x7f79fd,_0x5ee8bf){return _0x5942b6(_0x5699db-0x118,_0x7f79fd,_0x421168-0x8d,_0x7f79fd-0x113,_0x5ee8bf-0x17a);}function _0x35e457(_0x790803,_0x33c4e2,_0x50ccd3,_0x10b8e8,_0x342f7c){return _0x9cbdf(_0x790803-0xa,_0x33c4e2-0x1a8,_0x10b8e8-0x1d5,_0x10b8e8-0x45,_0x50ccd3);}const _0x30229a={};_0x30229a[_0x35e457(0x2dc,0x2d9,0x2ee,0x2f6,0x2df)]=_0x35e457(0x345,0x337,0x323,0x32b,0x32b)+_0x35e457(0x321,0x317,0x31a,0x31d,0x30f)+_0x35e457(0x326,0x32b,0x329,0x31d,0x30d)+_0x35e457(0x2ee,0x2fc,0x30b,0x2fc,0x300),_0x30229a[_0x21ed8e(0x10e,0x13e,0x127,0x12a,0x10e)]=_0x4d3cf1(0x18f,0x1aa,0x178,0x193,0x18f),_0x30229a[_0x9ff100(-0x258,-0x24c,-0x265,-0x271,-0x260)]=function(_0x48ace8,_0x3f2f3e){return _0x48ace8+_0x3f2f3e;},_0x30229a[_0x4d3cf1(0x190,0x18c,0x188,0x18d,0x1a5)]=_0x1b4b55(-0xc7,-0xab,-0xc7,-0xc5,-0xb6)+_0x35e457(0x312,0x319,0x302,0x31d,0x324)+_0x1b4b55(-0x87,-0xa9,-0xab,-0x88,-0x9f)+_0x9ff100(-0x270,-0x25f,-0x278,-0x280,-0x281);function _0x9ff100(_0x28210d,_0x163660,_0x1b1e9b,_0x14bf3d,_0x331a0a){return _0x1cd29f(_0x1b1e9b- -0x8b,_0x163660-0x49,_0x14bf3d,_0x14bf3d-0xa1,_0x331a0a-0xf7);}const _0x1e2940=_0x30229a;if(_0x28c0ac[_0x1b4b55(-0x92,-0xa3,-0xaf,-0x94,-0x95)+'up']){const _0x234356=_0x28c0ac[_0x35e457(0x328,0x31f,0x333,0x327,0x322)+'up']?await _0x181e78[_0x1b4b55(-0xa3,-0xad,-0xa4,-0x78,-0x94)+_0x1b4b55(-0xba,-0xaa,-0xa9,-0xdb,-0xc2)+_0x21ed8e(0x115,0x12e,0xfb,0x117,0x129)](_0x28c0ac[_0x9ff100(-0x272,-0x264,-0x26a,-0x25e,-0x275)])[_0x9ff100(-0x26b,-0x25c,-0x266,-0x260,-0x24f)](_0xc90818=>{}):'',_0x2cb6d0=_0x28c0ac[_0x9ff100(-0x24a,-0x244,-0x250,-0x265,-0x252)+'up']?await _0x234356[_0x4d3cf1(0x19a,0x1b7,0x1a5,0x1ae,0x192)+_0x4d3cf1(0x182,0x187,0x17a,0x195,0x17a)+'ts']:'';let _0x371011=_0x28c0ac[_0x1b4b55(-0xb1,-0x99,-0x97,-0x9b,-0x95)+'up']?await _0x2cb6d0[_0x4d3cf1(0x16d,0x170,0x162,0x172,0x178)+'r'](_0x59a1f2=>_0x59a1f2[_0x9ff100(-0x274,-0x280,-0x263,-0x277,-0x27e)]!==null)[_0x35e457(0x30f,0x32e,0x325,0x315,0x332)](_0xef70a7=>_0xef70a7['id']):'',_0xf3b00a=_0x1e2940[_0x21ed8e(0x114,0x123,0x115,0x10d,0x127)],_0x26955f=_0x1e2940[_0x4d3cf1(0x187,0x18b,0x184,0x19f,0x16a)];for(let _0x4bc6e5 of _0x2cb6d0){_0xf3b00a+=_0x26955f+'\x20\x20'+_0x4bc6e5['id'][_0x9ff100(-0x28b,-0x27e,-0x27a,-0x28a,-0x262)]('@')[0x1*0x8b3+0x8e4+0x4f*-0x39]+'\x0a';}if(_0x28c0ac[_0x35e457(0x30e,0x339,0x325,0x324,0x32b)+'t'][_0x1b4b55(-0x82,-0x84,-0xa2,-0xae,-0x92)+_0x9ff100(-0x274,-0x26b,-0x276,-0x264,-0x272)]||_0x371011)return await _0x181e78[_0x9ff100(-0x23e,-0x237,-0x24b,-0x243,-0x259)+_0x35e457(0x328,0x324,0x2fc,0x317,0x321)+'e'](_0x28c0ac[_0x21ed8e(0x126,0x10a,0x12e,0x124,0x11e)],{'text':_0x1e2940[_0x35e457(0x321,0x32d,0x31a,0x312,0x32a)](_0xf3b00a,_0x1e2940[_0x21ed8e(0x147,0x13c,0x132,0x133,0x14c)])});}});function _0x5942b6(_0x1e7013,_0x2fd312,_0xc6bccf,_0x297c80,_0x224d6f){return _0x522d(_0x1e7013- -0x3c,_0x2fd312);}const _0x4e3d1e={};function _0x522d(_0x5df6b8,_0x45060a){const _0xfa949c=_0x207e();return _0x522d=function(_0xb86fc1,_0x1dcf52){_0xb86fc1=_0xb86fc1-(0x1fdf+0x2*0x5ad+-0x2aad);let _0x22b31c=_0xfa949c[_0xb86fc1];return _0x22b31c;},_0x522d(_0x5df6b8,_0x45060a);}_0x4e3d1e[_0x9cbdf(0x130,0x13f,0x141,0x132,0x159)+'rn']=[_0x5942b6(0x7d,0x7a,0x94,0x92,0x76)+_0x9cbdf(0x126,0x11b,0x134,0x11f,0x139)];function _0x47a044(_0x207832,_0x5027cd,_0x46e8ea,_0x307b50,_0x303452){return _0x522d(_0x207832- -0x18b,_0x303452);}function _0x9cbdf(_0x1f346e,_0x293189,_0x4e0fa7,_0x455aa0,_0xcf5d36){return _0x522d(_0x4e0fa7-0x93,_0xcf5d36);}function _0x1bb8b9(_0x10c9f8,_0x25dddd,_0x375c72,_0x545691,_0x359502){return _0x522d(_0x359502- -0x2a7,_0x10c9f8);}_0x4e3d1e[_0x1cd29f(-0x1bf,-0x1d8,-0x1b7,-0x1d2,-0x1d7)]=_0x9cbdf(0x165,0x158,0x14e,0x153,0x15c)+_0x9cbdf(0x132,0x118,0x123,0x135,0x112)+_0x5942b6(0x61,0x77,0x4e,0x73,0x44)+_0x1cd29f(-0x1ee,-0x1f6,-0x1fb,-0x1db,-0x207)+_0x5942b6(0x7c,0x66,0x6a,0x73,0x6e),_0x4e3d1e[_0x47a044(-0xec,-0x109,-0xe5,-0x103,-0xfc)+_0x9cbdf(0x135,0x11a,0x12e,0x149,0x121)]='😄',_0x4e3d1e[_0x1bb8b9(-0x206,-0x1e2,-0x1e9,-0x1d6,-0x1f0)+_0x1bb8b9(-0x22b,-0x228,-0x22d,-0x200,-0x21b)]=[_0x47a044(-0xef,-0xf8,-0xe6,-0xd4,-0x10b)+'m',_0x1bb8b9(-0x1dd,-0x206,-0x1ef,-0x1eb,-0x1f6)],inrl(_0x4e3d1e,async(_0xb46472,_0x2a3c36)=>{const _0x2dc6d4={};function _0x664fd0(_0x5f0ec2,_0x45fd60,_0x40d097,_0x21ef4e,_0x2066cd){return _0x47a044(_0x21ef4e- -0x11a,_0x45fd60-0xc9,_0x40d097-0xaf,_0x21ef4e-0x10b,_0x2066cd);}function _0xda5c4e(_0x15dfae,_0x3de942,_0x110e69,_0x408213,_0x3e24ea){return _0x9cbdf(_0x15dfae-0xcd,_0x3de942-0x11a,_0x110e69-0xd9,_0x408213-0x19f,_0x3e24ea);}_0x2dc6d4[_0x59c20a(-0x1,0xb,0x8,-0x2,0x8)]=_0x59c20a(-0x2,0x11,0xa,0xa,0x3)+_0xda5c4e(0x231,0x22b,0x221,0x20e,0x223)+_0x4cb3ad(-0x191,-0x1b3,-0x199,-0x184,-0x1b4)+_0x59c20a(-0x26,-0x1e,-0xb,-0x2d,-0x2b),_0x2dc6d4[_0xda5c4e(0x23d,0x23c,0x222,0x23f,0x20a)]=_0x664fd0(-0x20b,-0x1f2,-0x1d7,-0x1f2,-0x20b),_0x2dc6d4[_0x4cb3ad(-0x1c6,-0x1b0,-0x1aa,-0x1bc,-0x1af)]=function(_0x34c341,_0x1143de){return _0x34c341+_0x1143de;},_0x2dc6d4[_0x59c20a(-0x8,0xf,0x15,0xb,0x28)]=_0x211f0e(-0x5a,-0x75,-0x5b,-0x82,-0x6c)+_0x664fd0(-0x1fe,-0x1eb,-0x1de,-0x1f0,-0x209)+_0x59c20a(0x13,0x3,-0x8,0x4,0xa)+_0x211f0e(-0x8b,-0x7f,-0x70,-0x5e,-0x73);function _0x211f0e(_0xa63050,_0x21f15a,_0x882cc6,_0xb77269,_0x2c5d04){return _0x47a044(_0x2c5d04-0x81,_0x21f15a-0x170,_0x882cc6-0x1cb,_0xb77269-0x1df,_0xb77269);}function _0x59c20a(_0x4b8994,_0x2050e4,_0x39d50a,_0x5cd4ad,_0x47fd67){return _0x9cbdf(_0x4b8994-0x3,_0x2050e4-0x1bd,_0x2050e4- -0x145,_0x5cd4ad-0xa1,_0x5cd4ad);}function _0x4cb3ad(_0x123dd2,_0x4fc07b,_0x44e03c,_0xd526d0,_0x4d91a9){return _0x9cbdf(_0x123dd2-0xf5,_0x4fc07b-0x1d7,_0x44e03c- -0x2e1,_0xd526d0-0x174,_0x4fc07b);}const _0x1876f5=_0x2dc6d4;if(_0xb46472[_0x664fd0(-0x1e6,-0x1fb,-0x1d7,-0x1e6,-0x1c9)+'up']){const _0x6ce937=_0xb46472[_0x59c20a(0xa,0xd,0x20,0x15,0x3)+'up']?await _0x2a3c36[_0x664fd0(-0x1df,-0x1f4,-0x1f8,-0x1e5,-0x1ff)+_0x211f0e(-0x6d,-0x67,-0x82,-0x8e,-0x78)+_0x211f0e(-0x89,-0x6a,-0x75,-0x85,-0x72)](_0xb46472[_0x664fd0(-0x205,-0x208,-0x1f4,-0x200,-0x1fa)])[_0x4cb3ad(-0x1af,-0x18c,-0x1a5,-0x192,-0x19e)](_0x47e519=>{}):'',_0x22f46b=_0xb46472[_0x664fd0(-0x1c9,-0x1e6,-0x1e9,-0x1e6,-0x1ce)+'up']?await _0x6ce937[_0x4cb3ad(-0x18f,-0x18b,-0x190,-0x18a,-0x1a6)+_0x59c20a(0x7,-0xc,0x11,-0xc,0x0)+'ts']:'';let _0x2adb5a=_0xb46472[_0x4cb3ad(-0x189,-0x17a,-0x18f,-0x187,-0x175)+'up']?await _0x22f46b[_0x4cb3ad(-0x1ce,-0x1c7,-0x1bd,-0x1ce,-0x1b1)+'r'](_0x20ac53=>_0x20ac53[_0x664fd0(-0x1e0,-0x1e8,-0x1e2,-0x1f9,-0x1f0)]!==null)[_0x211f0e(-0x75,-0x5e,-0x64,-0x4f,-0x5d)](_0x3d1534=>_0x3d1534['id']):'',_0x2da62e=_0x1876f5[_0x4cb3ad(-0x17e,-0x183,-0x191,-0x176,-0x178)],_0x393c3c=_0x1876f5[_0x211f0e(-0x37,-0x3a,-0x4e,-0x6b,-0x54)];for(let _0x4a4837 of _0x2adb5a){_0x2da62e+=_0x393c3c+'\x20\x20'+_0x4a4837[_0x59c20a(-0x16,-0x1d,-0x11,-0x2e,-0x32)]('@')[-0x36*0x72+0x1a1a+-0x20e]+'\x0a';}if(_0xb46472[_0x211f0e(-0x61,-0x3c,-0x49,-0x42,-0x4e)+'t'][_0x59c20a(-0xb,0x10,0x15,0x28,0x10)+_0x211f0e(-0x81,-0x79,-0x63,-0x87,-0x71)]||_0x2adb5a)return await _0x2a3c36[_0x4cb3ad(-0x194,-0x18a,-0x18a,-0x191,-0x177)+_0x4cb3ad(-0x18c,-0x189,-0x19f,-0x1bb,-0x18a)+'e'](_0xb46472[_0x211f0e(-0x79,-0x63,-0x7c,-0x56,-0x65)],{'text':_0x1876f5[_0x211f0e(-0x4c,-0x65,-0x51,-0x4a,-0x66)](_0x2da62e,_0x1876f5[_0x4cb3ad(-0x1a2,-0x171,-0x18d,-0x184,-0x1a6)])});}});
inrl({
		pattern: ['forward'],
		desc: 'for sending a message  by thir jid',
                sucReact: "😉",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
if(!match.endsWith('g.us' || 'whatsapp.net')) return client.sendMessage(message.from, {text : "after the (cmd) enter the jid to share your data \n_example :- forward 910123456789@s.whatsapp.net"})
let jid = match;
if(message.quoted.imageMessage){
let msg = await message.quoted.download();
await client.sendMessage(jid, { image : msg });
}else if(message.quoted.stickerMessage){
let msg = await message.quoted.download();
await client.sendMessage(jid, { sticker : msg });
}else if(message.quoted.videoMessage){
let msg = await message.quoted.download();
await client.sendMessage(jid, { video : msg });
}else { return await client.sendMessage(message.from, { text : "replay to a message with a jid"});}
});

