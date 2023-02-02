const {BGMBOT} = require('../config');
const bgm = require('../media/bgm.json');

module.exports = async(msg, conn, m, store) => {
if(BGMBOT !="true") return;
 for (let key in bgm) {
      let a = []; a.push(key)
      a.map((a)=>{
      if(m.client.body.toLowerCase().includes(a.toLowerCase())){
  let audio = bgm[key];
  return conn.sendMessage(m.from,{ audio: { url: audio }, mimetype: "audio/mp4",ptt: true}, { quoted: m } );
       }
    })
  }
}
