const fs = require("fs")
global.user = require("./lib/database/data/user")
global.group = require("./lib/database/data/group")
global._user = JSON.parse(fs.readFileSync("./lib/database/data/user.json"))
global._group = JSON.parse(fs.readFileSync("./lib/database/data/group.json"))
global.owner = ["917593919575"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'only for owner', premium: 'onpy for primum mebers, group: 'only in grp', private: 'only in personel chat', admin: 'only for grp dmin', botAdmin: 'onpy for bot owner', bot: 'only for bot numbert', dead: 'bot deqd😇🤣!', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
