//created by @inrl
const { inrl, sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3 } = require('../lib');


   inrl({ pattern: ['photo'], desc: "to convert webp to img",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   await sendPhoto(message, client);
});
inrl({ pattern: ['video'], desc: "to convert webp to mp4",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   await sendVideo(message, client)
 });
 inrl({ pattern: ['voice'], desc: "to convert audio/video to ptt",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
 await sendVoice(message, client)
 });
 inrl({ pattern: ['togif'], desc: "to convert webp to gif",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
   await sendGif(message, client)
 });
inrl({ pattern: ['bass'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendBassAudio(message, client)
});
inrl({ pattern: ['slow'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendSlowAudio(message, client)
});
inrl({ pattern: ['blown'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendBlownAudio(message, client)
});
inrl({ pattern: ['deep'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendDeepAudio(message, client);
});
inrl({ pattern: ['earrape'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendErrapeAudio(message, client)
});
inrl({ pattern: ['fast'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendFastAudio(message, client)
});
inrl({ pattern: ['fat'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendFatAudio(message, client);
});
inrl({ pattern: ['nightcore'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendNightcoreAudio(message, client);
});
inrl({ pattern: ['reverse'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendReverseAudio(message, client);
});
inrl({ pattern: ['squirrel'], desc: "to convert audio to given cmd",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
    await sendSquirrelAudio(message, client);
});
inrl({ pattern: ['audio-menu'], desc: "to convert audio to given cmd",sucReact: "😹",  category: ["all"]}, async (message, client) => {
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
inrl({pattern: ['tts'], desc: "to get text as audio ", sucReact: "💔", category: ['all'], }, (async (message, client) => {
const text = message.client.text;
	    if (!message.client.text) return await client.sendMessage( message.from, { text: 'Enter A text'}, { quoted: message });
            let InRL, TEXT;
            let split = message.client.text.split(',');
            TEXT = split[0] || text;
            InRL = split[1] || Config.LANG;
             
                LANG = InRL;
                ttsMessage = TEXT;
                SPEED = 1.0
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await client.sendMessage( message.from, { audio:buffer, mimetype: "audio/mp4",ptt: true}, { quoted: message } );
        }));
inrl({pattern: ['mp3','audio'], desc: "to get video as audio ", sucReact: "💥", category: ['all'], }, (async (message, client) => {
await sendMp4AsMp3(message, client)
            }));
