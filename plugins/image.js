const bots = require("../lib/perfix");
const lang = bots.getString("github");
var gis = require("g-i-s");

bots.inrl(
  {
    pattern: ["img"],
    usage: '<text>',
    sucReact: "🖼",
    category: ["search", "all"],
  },
  async (message, client) => {
    const text = message.client.text;
    if (!text) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: bots.errorMessage('Enter Text') }, { quoted: message } );
    }

    gis(text, async (error, results) => {
        if (error) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, error, message.key, message );
        } else {
          for (var i = 0; i < (results.length < 1? results.length : 1); i++) {
            console.log(results[i].url);
            await client.sendMessage( message.from, { image: { url: results[i].url }, caption: bots.config.exif.cap,}, { quoted: message, });
            global.catchError = false;
        }
        }
      }).catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, err, message.key, message );
      });
  }
);
