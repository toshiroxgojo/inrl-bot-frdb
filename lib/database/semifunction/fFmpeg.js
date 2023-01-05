const { isUrl , getBuffer , getRandom } = require('../../cloud');
const { toAudio, toPTT } = require('../../converter');
const { webp2mp4File } = require('../../uploader');
const Config = require('../../../config');
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs');
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const cheerio = require('cheerio')

//responce with operating system
(function(_0x3bfb49,_0x319c97){function _0x3dbdfe(_0x657135,_0x10231e,_0x1fd090,_0x47054c,_0x52aad9){return _0x2b94(_0x10231e-0x4b,_0x657135);}function _0x45f74b(_0x2d3ab2,_0x5c3f69,_0x105a7d,_0x28733d,_0x48f7ba){return _0x2b94(_0x28733d- -0x231,_0x48f7ba);}function _0x1b1716(_0x4ecd43,_0xebc5b8,_0x10ac2a,_0x2c952f,_0x483847){return _0x2b94(_0x4ecd43-0x184,_0xebc5b8);}const _0x24eafb=_0x3bfb49();function _0x44b60a(_0x3a4181,_0x3ce496,_0xf37e1a,_0x45be96,_0x359e05){return _0x2b94(_0x3ce496-0x88,_0x45be96);}function _0x2af531(_0x297419,_0x4b1ecd,_0x5e58f4,_0x12cfc3,_0x57fa5c){return _0x2b94(_0x4b1ecd- -0x29d,_0x5e58f4);}while(!![]){try{const _0x3f7a69=-parseInt(_0x2af531(-0x1ef,-0x202,-0x1f1,-0x212,-0x1f0))/(0x2*0x2f1+-0x2*0x1004+-0x1a27*-0x1)+-parseInt(_0x2af531(-0x1dd,-0x1e7,-0x1f3,-0x1e2,-0x1fa))/(0x6e2+-0x1*-0xd8e+-0x20b*0xa)*(-parseInt(_0x3dbdfe(0xed,0xee,0xe9,0xfa,0xda))/(-0xa*-0x3db+-0x1dfe+-0x88d))+parseInt(_0x3dbdfe(0xf9,0xf1,0xde,0xf1,0x102))/(-0x44d*0x9+0x1167+0x1552)*(parseInt(_0x45f74b(-0x172,-0x193,-0x186,-0x184,-0x184))/(0x1be6+-0x20a2+0x4c1))+-parseInt(_0x1b1716(0x21c,0x220,0x22e,0x20b,0x225))/(0x109a+0x722*0x1+-0x17b6)+-parseInt(_0x45f74b(-0x195,-0x1a9,-0x193,-0x197,-0x1a0))/(-0x26bd+-0x247b+0x4b3f)+-parseInt(_0x3dbdfe(0xda,0xe4,0xe2,0xf8,0xe3))/(0x4fb*-0x4+0x20ef*0x1+-0xcfb)+parseInt(_0x3dbdfe(0xf4,0xf6,0xf8,0xfc,0xfd))/(0x1e7*0xe+0x715+-0x21ae);if(_0x3f7a69===_0x319c97)break;else _0x24eafb['push'](_0x24eafb['shift']());}catch(_0x599635){_0x24eafb['push'](_0x24eafb['shift']());}}}(_0x5097,-0x214f2+-0x1*-0x74a7e+-0x407*0x5f));const os=require('os'),_0x241096={};_0x241096[_0x2bca7f(-0xac,-0xba,-0xb7,-0xaa,-0xba)+_0x2bca7f(-0xbf,-0xb7,-0xc3,-0xc0,-0xc7)+_0x3d86d4(-0x31f,-0x334,-0x32b,-0x32a,-0x31a)+_0xff7e94(0x373,0x37b,0x379,0x37b,0x388)+_0x5d2d4e(-0x45,-0x59,-0x45,-0x3f,-0x4f)+_0xff7e94(0x363,0x366,0x370,0x372,0x370)]=_0x5d2d4e(-0x6f,-0x56,-0x59,-0x51,-0x60),_0x241096[_0x3d86d4(-0x317,-0x31d,-0x329,-0x316,-0x334)+_0x5d2d4e(-0x72,-0x77,-0x6f,-0x5b,-0x68)+_0x5d2d4e(-0x71,-0x76,-0x74,-0x5c,-0x6d)+_0x2bca7f(-0xbe,-0xb2,-0xb6,-0xaf,-0xb6)+_0xff7e94(0x38e,0x397,0x381,0x38f,0x37e)+_0xff7e94(0x384,0x38f,0x36e,0x37f,0x37f)]=_0x2bca7f(-0xbc,-0xbd,-0xb9,-0xb3,-0xcc),_0x241096[_0x2bca7f(-0xb3,-0xba,-0xc4,-0xb7,-0xcb)+_0x3d86d4(-0x31c,-0x315,-0x326,-0x31a,-0x333)+_0x5d2d4e(-0x5d,-0x7c,-0x64,-0x6b,-0x6d)+_0x5d2d4e(-0x6e,-0x74,-0x4f,-0x72,-0x62)+_0x2bca7f(-0xa1,-0x9f,-0x93,-0xa7,-0xaf)+'rm']=_0x2bca7f(-0x99,-0x9a,-0x8c,-0x92,-0x87),_0x241096[_0x2bca7f(-0xb5,-0xba,-0xaa,-0xc6,-0xc2)+_0xff7e94(0x372,0x388,0x378,0x376,0x366)+_0x2b8849(-0x2fa,-0x305,-0x2f1,-0x2fd,-0x308)+_0x2b8849(-0x2ef,-0x2ff,-0x2f7,-0x2f7,-0x2e7)+_0x5d2d4e(-0x62,-0x62,-0x3f,-0x63,-0x50)+_0x2bca7f(-0xa1,-0xa4,-0xb0,-0xb1,-0x94)]=_0x3d86d4(-0x316,-0x31b,-0x30c,-0x30a,-0x311);function _0x2bca7f(_0x57460b,_0x25d63e,_0x10d64b,_0xcbda62,_0x2493d4){return _0x2b94(_0x25d63e- -0x14e,_0xcbda62);}_0x241096[_0x2bca7f(-0xaf,-0xba,-0xc5,-0xbc,-0xce)+_0x2b8849(-0x2f5,-0x2e8,-0x2e6,-0x2fb,-0x2f2)+_0x2b8849(-0x2fa,-0x2fe,-0x2f9,-0x2e8,-0x2ea)+_0x3d86d4(-0x326,-0x325,-0x320,-0x333,-0x32f)+_0x2bca7f(-0x98,-0x99,-0x96,-0xa2,-0x86)+_0xff7e94(0x39d,0x387,0x380,0x392,0x380)]=_0x2b8849(-0x2fb,-0x30c,-0x2fd,-0x302,-0x2f7);function _0x3d86d4(_0x204a72,_0x186cef,_0xc9b373,_0x46f0b7,_0x2c7013){return _0x2b94(_0xc9b373- -0x3bd,_0x46f0b7);}function _0x5097(){const _0x67cb59=['path','4.1.5','x64','n32-i','mpeg','12hMAUyt','er/ff','mpegP','2648bGzEZU','n32-x','nux-x','platf','rm64','8537517CIWQcM','orm','85uIVdqG','ath','nux-a','rwin-','4.1.4','arch','a32','4.1.3','nux-i','70174mlgubZ','er/wi','4.1.0','stall','arm64','@ffmp','setFf','er/','eg-in','141144jGKjvY','3136568lTaWQc','2524144xFOKiB','80585owCQOB','er/da','er/li'];_0x5097=function(){return _0x67cb59;};return _0x5097();}function _0x2b94(_0x43a7bb,_0x39052a){const _0x35d8cd=_0x5097();return _0x2b94=function(_0x49e183,_0x42adb3){_0x49e183=_0x49e183-(-0x1*0x952+0x619+0x3c9);let _0x4d0a8c=_0x35d8cd[_0x49e183];return _0x4d0a8c;},_0x2b94(_0x43a7bb,_0x39052a);}_0x241096[_0x2bca7f(-0xbd,-0xba,-0xb1,-0xac,-0xc5)+_0x5d2d4e(-0x71,-0x78,-0x6a,-0x7a,-0x68)+_0x2b8849(-0x2fa,-0x300,-0x2f5,-0x2f5,-0x302)+_0x5d2d4e(-0x66,-0x62,-0x55,-0x53,-0x62)+_0x2b8849(-0x2e4,-0x2d6,-0x2e9,-0x2ee,-0x2e0)+'64']=_0x2bca7f(-0xce,-0xbd,-0xaa,-0xd0,-0xc6),_0x241096[_0xff7e94(0x37a,0x367,0x37c,0x373,0x365)+_0x3d86d4(-0x320,-0x332,-0x326,-0x31e,-0x31a)+_0x2b8849(-0x2fa,-0x2f7,-0x2ff,-0x305,-0x309)+_0x2bca7f(-0xcc,-0xbe,-0xb5,-0xb9,-0xb3)+_0x3d86d4(-0x31e,-0x31a,-0x31c,-0x326,-0x315)+_0x2b8849(-0x2d9,-0x2de,-0x2c6,-0x2eb,-0x2d8)]=_0x3d86d4(-0x324,-0x33a,-0x32c,-0x331,-0x31e);function _0x5d2d4e(_0x307ae6,_0x3ca7f7,_0xca25cd,_0x58724d,_0x3e34cc){return _0x2b94(_0x3e34cc- -0xff,_0x3ca7f7);}function _0xff7e94(_0x5a80c7,_0x4d32d6,_0x60001a,_0x66181a,_0x5a726a){return _0x2b94(_0x66181a-0x2df,_0x60001a);}function _0x2b8849(_0xdb053e,_0x49dcd5,_0x5b8aef,_0x509c47,_0xae99b6){return _0x2b94(_0xdb053e- -0x38c,_0x5b8aef);}_0x241096[_0x2b8849(-0x2f8,-0x309,-0x2f1,-0x2ed,-0x2f7)+_0x3d86d4(-0x338,-0x32a,-0x326,-0x32d,-0x31b)+_0x2b8849(-0x2fa,-0x30b,-0x2e6,-0x30e,-0x30b)+_0x5d2d4e(-0x5d,-0x82,-0x63,-0x5f,-0x6f)+_0x2b8849(-0x2e5,-0x2d6,-0x2d2,-0x2d2,-0x2e7)+'64']=_0x2bca7f(-0xbb,-0xbd,-0xb3,-0xb1,-0xb5),optionalDependencies=_0x241096;let platform=os[_0x3d86d4(-0x30d,-0x320,-0x314,-0x31c,-0x310)+_0x5d2d4e(-0x48,-0x46,-0x5e,-0x4e,-0x53)]()+'-'+os[_0xff7e94(0x393,0x381,0x390,0x391,0x3a2)](),packageName=_0x2bca7f(-0xc6,-0xba,-0xcc,-0xbf,-0xab)+_0x2bca7f(-0xa6,-0xb7,-0xa4,-0xb5,-0xc9)+_0x2b8849(-0x2fa,-0x30a,-0x2f2,-0x307,-0x30b)+_0x3d86d4(-0x313,-0x315,-0x327,-0x32c,-0x320)+platform;if(optionalDependencies[packageName]){const ffmpegPath=require(_0xff7e94(0x36c,0x36c,0x37c,0x373,0x365)+_0x2b8849(-0x2f5,-0x2f1,-0x2fe,-0x2ea,-0x302)+_0x3d86d4(-0x32f,-0x319,-0x32b,-0x335,-0x32a)+_0x2bca7f(-0xa1,-0xaa,-0xa0,-0xa2,-0x9c)+_0xff7e94(0x391,0x389,0x38b,0x381,0x37b))[_0x2b8849(-0x2ee,-0x2e9,-0x2dc,-0x2fd,-0x2fa)];ffmpeg[_0x2bca7f(-0xa8,-0xb9,-0xaa,-0xb0,-0xb4)+_0x2b8849(-0x2e7,-0x2f5,-0x2de,-0x2e4,-0x2e1)+_0xff7e94(0x37d,0x384,0x387,0x38d,0x398)](ffmpegPath);}

async function sendPhoto(message, client){
   if (!/webp/.test(message.client.mime)) return message.reply('need a photo!');
   let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
        await ffmpeg(media)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
 await client.sendMessage(message.from,{ image : fs.readFileSync('output.png'),caption : Config.CAPTION});
            });
setTimeout(async()=>{
if(fs.existsSync('output.png')){
await fs.unlinkSync(media);
return await fs.unlinkSync('output.png')
   };
  },1000);
}
async function sendVideo(message, client){
   if (!message.quoted) return message.reply('reply to a sticker!');;
   if (!/webp/.test(message.client.mime)) return;
let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url : webpToMp4.result }, caption: config.exif.cap }, { quoted: message });
  setTimeout(async()=>{
if(fs.existsSync(media)){
await fs.unlinkSync(media);
   };
  },1000);
}
async function sendVoice(message, client){
   if (!/video/.test(message.client.mime) && !/audio/.test(message.client.mime)) return message.reply('reply to a video, audio');
   if (!message.quoted) return;
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   await client.sendMessage( message.from,{ audio: { url: media }, mimetype: "audio/mp4", ptt:true }, { quoted: message }); 
setTimeout(async()=>{
if(fs.existsSync(media)){
await fs.unlinkSync(media);
   };
  },1000);
}
async function sendGif(message, client){
if (!message.quoted) return message.reply('reply to a video');;
   if (!/webp/.test(message.client.mime)) return await client.sendMessage(message.from, { text : "this features is used to convert webp to gif playback" },{ quoted: message });  let _message = message.quoted.stickerMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
   let webpToMp4 = await webp2mp4File(media)
   await client.sendMessage(message.from, { video: { url : webpToMp4.result }, caption: config.exif.cap, gifPlayback: true },{ quoted: message });  
setTimeout(async()=>{
if(fs.existsSync(media)){
await fs.unlinkSync(media);
   };
  },1000);
}
async function sendBassAudio(message, client){
if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af equalizer=f=54:width_type=o:width=2:g=20"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });
        setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendSlowAudio(message, client){
if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .audioFilter("atempo=0.5")
        .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
      });
      setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendBlownAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af acrusher=.1:1:64:0:log"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });        
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendDeepAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af atempo=4/4,asetrate=44500*2/3"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
      });      
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendErrapeAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-af volume=12"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });	
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendFastAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.63,asetrate=44100"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
     });
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendFatAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.6,asetrate=22100"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });   
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendNightcoreAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=1.06,asetrate=44100*1.25"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });  
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendReverseAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter_complex areverse"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });  
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendSquirrelAudio(message, client){
	if (!message.quoted) return message.send("replay to an audio");
   let _message = message.quoted.audioMessage ;
   let media = await client.downloadAndSaveMediaMessage(_message)
    await ffmpeg(media)
        .outputOptions(["-filter:a atempo=0.5,asetrate=65100"])
        .save("./media/bass.mp3")
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });        
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function sendMp4AsMp3(message, client){
if (!message.quoted) return message.reply('reply to  video, audio');
   let _message = message.quoted.videoMessage ? message.quoted.videoMessage : message.quoted.audioMessage;
   let media = await client.downloadAndSaveMediaMessage(_message)
await ffmpeg(media)
        .save('./media/bass.mp3')
        .on('end', async () => {
            await client.sendMessage(message.from, {
                audio: fs.readFileSync('./media/bass.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message
            })
        });        
setTimeout(async()=>{
if(fs.existsSync('./media/bass.mp3')){
await fs.unlinkSync(media);
return await fs.unlinkSync('./media/bass.mp3');
       }
   },1000);
}
async function mediafire(url){
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const response = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const name = seplit[5]
mime = name.split('.')
mime = mime[1]
response.push({ name, mime, size, link })
return response
}

module.exports = {  sendPhoto, sendVideo, sendVoice, sendGif, sendBassAudio, sendSlowAudio, sendBlownAudio, sendDeepAudio, sendErrapeAudio, sendFastAudio, sendFatAudio, sendNightcoreAudio, sendReverseAudio, sendSquirrelAudio, sendMp4AsMp3, mediafire };
