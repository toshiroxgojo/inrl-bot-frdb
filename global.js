const fs = require("fs")
global.owner = ["917593919575"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
