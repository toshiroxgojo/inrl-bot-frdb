//created by @ inrl

const { inrl } = require('../lib/');
//const { getLastMessageInChat } = require('@adiwajshing/baileys');
inrl(
	   {
		pattern: ['jid'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
		return await client.sendMessage( message.from, { text: message.from }, { quoted: message })
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
//added tagall, tagadmin
function _0x101e(_0x27d7cf,_0x1e9133){const _0x50fc9a=_0x50fc();return _0x101e=function(_0x101e31,_0x45b4b1){_0x101e31=_0x101e31-0xf4;let _0x58cb55=_0x50fc9a[_0x101e31];return _0x58cb55;},_0x101e(_0x27d7cf,_0x1e9133);}const _0x3e0cf2=_0x101e;(function(_0x11f7aa,_0x504e0c){const _0x19a9f5=_0x101e,_0x21ab2c=_0x11f7aa();while(!![]){try{const _0x5614ba=-parseInt(_0x19a9f5(0x103))/0x1*(parseInt(_0x19a9f5(0x10d))/0x2)+-parseInt(_0x19a9f5(0x109))/0x3*(-parseInt(_0x19a9f5(0x10a))/0x4)+-parseInt(_0x19a9f5(0xf8))/0x5+-parseInt(_0x19a9f5(0x102))/0x6*(parseInt(_0x19a9f5(0x108))/0x7)+parseInt(_0x19a9f5(0x10b))/0x8+parseInt(_0x19a9f5(0x10f))/0x9*(-parseInt(_0x19a9f5(0x107))/0xa)+parseInt(_0x19a9f5(0x106))/0xb;if(_0x5614ba===_0x504e0c)break;else _0x21ab2c['push'](_0x21ab2c['shift']());}catch(_0x5ee198){_0x21ab2c['push'](_0x21ab2c['shift']());}}}(_0x50fc,0xac07c),inrl({'pattern':['tagall'],'desc':_0x3e0cf2(0xfb),'sucReact':'😄','category':[_0x3e0cf2(0xf5),_0x3e0cf2(0xfc)]},async(_0x44c2c2,_0x3cd50f)=>{const _0x491137=_0x3e0cf2;if(_0x44c2c2[_0x491137(0x110)]){const _0x5692ee=_0x44c2c2['isGroup']?await _0x3cd50f[_0x491137(0xff)](_0x44c2c2[_0x491137(0x10e)])[_0x491137(0x104)](_0x137853=>{}):'',_0x2087eb=_0x44c2c2[_0x491137(0x110)]?await _0x5692ee[_0x491137(0xf9)]:'';let _0x3b4013=_0x44c2c2['isGroup']?await _0x2087eb[_0x491137(0xfa)](_0x564c26=>_0x564c26['admin']!==null)[_0x491137(0x10c)](_0x2ed8ae=>_0x2ed8ae['id']):'',_0x1075a0='\x20\x20'+_0x44c2c2[_0x491137(0x105)]['text']+_0x491137(0xfe),_0x3bb8fe=0x1;for(let _0x53f163 of _0x2087eb){_0x1075a0+='\x20'+_0x3bb8fe++ +_0x491137(0xf7)+_0x53f163['id']['split']('@')[0x0]+'\x0a';}if(_0x44c2c2[_0x491137(0x105)][_0x491137(0xf4)]||_0x3b4013)return await _0x3cd50f['sendMessage'](_0x44c2c2['from'],{'text':_0x1075a0});}}),inrl({'pattern':[_0x3e0cf2(0xfd)],'desc':_0x3e0cf2(0xfb),'sucReact':'😄','category':[_0x3e0cf2(0xf5),_0x3e0cf2(0xfc)]},async(_0x36caf5,_0x3bce44)=>{const _0x8647c3=_0x3e0cf2;if(_0x36caf5['isGroup']){const _0x541194=_0x36caf5['isGroup']?await _0x3bce44[_0x8647c3(0xff)](_0x36caf5[_0x8647c3(0x10e)])[_0x8647c3(0x104)](_0x294e95=>{}):'',_0x39364e=_0x36caf5['isGroup']?await _0x541194[_0x8647c3(0xf9)]:'';let _0x10c5e0=_0x36caf5[_0x8647c3(0x110)]?await _0x39364e[_0x8647c3(0xfa)](_0x1e3e7e=>_0x1e3e7e['admin']!==null)['map'](_0x3d5f6f=>_0x3d5f6f['id']):'',_0xfd6e65='\x20\x20'+_0x36caf5['client']['text']+_0x8647c3(0x100),_0x5c4bcd=0x1;for(let _0x180f91 of _0x10c5e0){_0xfd6e65+='\x20'+_0x5c4bcd++ +_0x8647c3(0xf7)+_0x180f91[_0x8647c3(0x101)]('@')[0x0]+'\x0a';}if(_0x36caf5[_0x8647c3(0x105)]['isCreator']||_0x10c5e0)return await _0x3bce44[_0x8647c3(0xf6)](_0x36caf5[_0x8647c3(0x10e)],{'text':_0xfd6e65});}}));function _0x50fc(){const _0x40f127=['\x0a\x0a\x20\x20\x20\x20\x20💥💖💥\x20\x0a\x0a','split','5365806ZSxmiF','6LpJJGZ','catch','client','34475683osMAXk','2820vULcHv','7nvZMqW','2118LWqcHb','396UogFMh','5671792tIPCAq','map','219442kdnjev','from','35460RNHMHS','isGroup','isCreator','system','sendMessage','\x20\x20@','2723390wvhnrw','participants','filter','To\x20tag\x20all\x20group\x20member','all','tagadmin','\x0a\x0a\x20\x20\x20\x20\x20💗💗','groupMetadata'];_0x50fc=function(){return _0x40f127;};return _0x50fc();}
