//created by @inrl
//more featurs comming soon
const { inrl, isUrl, googleIt, wikiMedia, ringTone, getYtV, getYtA, ytmp4, ytmp3, weather, movie } = require('../lib');
const { instagram } = require('../lib/database/semifunction/serch_query');
const Config = require('../config');
const util = require('util');


inrl(
	   {
		pattern: ['google'],
		desc: 'do get goole serch result',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let teks = await googleIt(message.client.text);
        return await client.sendMessage( message.from, { text: "\n"+teks }, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['wikimedia'],
		desc: 'do get data from wikimedia',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let result = await wikiMedia(message.client.text);
let buttons = [
                 {buttonId: `wikimedia ${message.client.text}`, buttonText: {displayText: 'next result'}, type: 1}
              ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}`,
                    footer: Config.FOOTER,
                    buttons: buttons,
                    headerType: 4
                }
        return await client.sendMessage( message.from, buttonMessage, { quoted: message })
          }
     }
);
inrl(
	   {
		pattern: ['ringtone'],
		desc: 'do get random ringtons ',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client) => {
        if(message.client.text){
        let result = await ringTone(message.client.text);
        return await client.sendMessage( message.from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: message })
          }
     }
);

inrl(
	   {
		pattern: ['ytmp4'],
		desc: 'To get yt video',
                sucReact: "💯",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtV(message, client)
}if(match.includes('http')){
await ytmp4(message, client)
    }
  }
);
inrl(
	   {
		pattern: ['ytmp3'],
		desc: 'get yt video as mp3 output',
                sucReact: "🤙",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match.includes('http')){
await getYtA(message, client)
}if(match.includes('http')){
await ytmp3(message, client)
    }
  }
);
inrl(
	   {
		pattern: ['movie'],
		desc: 'To get detiles of movie',
                sucReact: "💥",
                category: ["system", "all", "downloade"],
	   },
	async (message, client,match) => {
if(!match) return message.send("enter name of movie");
await movie(message,client);
  }
);

inrl(
	   {
		pattern: ['weather'],
		desc: 'To get detiles of you place',
                sucReact: "🔥",
                category: ["system", "all"],
	   },
	async (message, client,match) => {
await wather(message,client);
  }
);
inrl(
	   {
		pattern: ['insta'],
		desc: 'do get instgram videos',
                sucReact: "🙃",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
        if(message.client.text){
        let url = await instagram(match);
        for (let i=0; i<url.length; i++) {
        return await client.sendMessage( message.from, { video: { url : url[i]}, caption :Config.CAPTION }, { quoted: message })
         }
      }
   }
);
