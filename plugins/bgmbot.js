const {BGMBOT} = require('../config');
const bgm = require('../media/bgm.json');


module.exports = async(msg, conn, m, store) => {
 let audios=[], mp3;
 if(BGMBOT !="true") return;
 for (let key in bgm) {
 let a = [];a.push(key)
 a.map((a)=>{
  if(m.client.body.toLowerCase().includes(a.toLowerCase())){
  mp3 = bgm[key];
  audios.push(mp3)
  mp3 = audios[Math.floor(Math.random() * audios.length)];
       }
    })
  }
 //return m.reply(audio)
if(mp3 === undefined) return;
 return conn.sendMessage(m.from,{ audio: { url: mp3.trim() }, mimetype: "audio/mp4",ptt: true}, { quoted: m } );
}
