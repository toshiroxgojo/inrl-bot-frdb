//created by @inrl
const { inrl, sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3 } = require('../lib');
const googleTTS = require('google-translate-tts');
const Config = require('../config')
const translatte = require("translatte");


   inrl({ pattern: ['photo'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
   await sendPhoto(message, client);
});
inrl({ pattern: ['video'], desc: "to convert webp to mp4",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
   await sendVideo(message, client)
 });
 inrl({ pattern: ['voice'], desc: "to convert audio/video to ptt",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
 await sendVoice(message, client)
 });
 inrl({ pattern: ['togif'], desc: "to convert webp to gif",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
   await sendGif(message, client)
 });
inrl({ pattern: ['bass'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendBassAudio(message, client)
});
inrl({ pattern: ['slow'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendSlowAudio(message, client)
});
inrl({ pattern: ['blown'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendBlownAudio(message, client)
});
inrl({ pattern: ['deep'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendDeepAudio(message, client);
});
inrl({ pattern: ['earrape'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendErrapeAudio(message, client)
});
inrl({ pattern: ['fast'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendFastAudio(message, client)
});
inrl({ pattern: ['fat'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendFatAudio(message, client);
});
inrl({ pattern: ['nightcore'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendNightcoreAudio(message, client);
});
inrl({ pattern: ['reverse'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendReverseAudio(message, client);
});
inrl({ pattern: ['squirrel'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"], type : "converter" }, async (message, client) => {
    await sendSquirrelAudio(message, client);
});
inrl({ pattern: ['audio-menu'], desc: "to convert audio to given cmd",sucReact: "😹",  category: ["all"], type : "converter" }, async (message, client) => {
const ImSg =`╭───────────────╮
│ 1 .ʙᴀss           
│ 2 .ʙʟᴏᴡɴ            
│ 3 .ᴅᴇᴇᴘ                   
│ 4 .ᴇᴀʀʀᴀᴘᴇ           
│ 5 .ғᴀsᴛ                                                                                             
│ 6 .ғᴀᴛ                       
│ 7 .ɴɪɢʜᴛᴄᴏʀᴇ
│ 8.ʀᴇᴠᴇʀsᴇ                      
│ 10 .sʟᴏᴡ
│ 12 .sǫᴜɪʀʀᴇʟ
╰───────────────╯`
await client.sendMessage(message.from,  { text : ImSg }, { quoted: message });
});


inrl({pattern: ['tts'], desc: "to get text as audio ", sucReact: "💔", category: ['all'], type : "converter" }, (async (message, client, match) => {
 if (!match) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
  
            let lang, TEXT;
            let split = match.split(',');
            TEXT = split[0] || match;
            lang = split[1] ? split[1].trim() : Config.LANG.trim();
             
                LANG = lang;
                ttsMessage = TEXT;
                SPEED = 1.0
    
            let buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio:buffer, mimetype: "audio/mp4",ptt: false }, { quoted: message } );
        }));
inrl({pattern: ['mp3','audio'], desc: "to get video as audio ", sucReact: "💥", category: ['all'], type : "converter" }, (async (message, client) => {
await sendMp4AsMp3(message, client)
            }));
inrl({pattern: ['trt'], desc: "to get video as audio ", sucReact: "💥", category: ['all'], type : "converter" }, async (message, client, match) => {
 if(match.includes(',')){
 let rslt = await translatte(match.split(',')[0], {
                from:"auto",
                to: match.split(',')[1].trim() || Config.LANG
            });
    return await message.send(rslt.text)
    }
});
