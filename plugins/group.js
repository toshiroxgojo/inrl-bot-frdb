const { inrl, errorMessage, getString, infoMessage, config } = require('../lib/');
const axios = require("axios");
const fs = require('fs');

inrl({ pattern: ["promote"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup) {
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: infoMessage(".ᴀᴅᴅɪɴɢ ᴀ ᴍᴇᴍʙᴇʀ") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "promote" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: infoMessage("ᴀᴅᴅɪɴɢ ᴀ ɴᴇᴡ ᴀᴅᴍɪɴ ʙy ʀᴇᴩʟy.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "promote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   };
  }
 }
);

inrl({ pattern: ["demote"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
   if (message.client.isCreator && message.isGroup) {
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: infoMessage("ɴᴜʟ🥵Using mentions.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "demote" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: infoMessage("ɴᴜʟʟ🥵Using reply.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "demote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   };
  }
 }
);

inrl({ pattern: ["kick"], usage: '<mentions|reply>', sucReact: "😤", category: ["group", "all"], },
  async (message, client) => {
   if (message.client.isCreator && message.isGroup) {
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: infoMessage("😤 Removing group member. Using mentions.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "remove" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: infoMessage("😤 Removing group member. Using reply.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "remove" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   };
  }
 }
);

inrl({ pattern: ["add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
const text = message.client.text;
   if (message.client.isCreator && message.isGroup) {
if(message.client.text){
let users = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await client.sendMessage( message.from, { text: infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, [users], "add" );
        global.catchError = false;
}else if(message.quoted){
let users = message.quoted.sender;
        await client.sendMessage( message.from, { text: infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, [users], "add" );
        global.catchError = false;
   }
  }
 }
);
inrl({ pattern: ["gpp"],desc: 'set full size profile picture', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
	if (message.client.isCreator && message.isGroup) {
	if (!message.quoted) {
			return await client.sendMessage( message.from,{ text :'*Reply to a image.*'}, { quoted: message })
                     }
let _message = message.quoted.imageMessage;
			let download = await client.downloadMediaMessage(_message);
		await client.updateProfilePicture(message.from, download );
		return await client.sendMessage( message.from,{text :'_Profile Picture Updated_'}, { quoted: message })
      }
   }
)
inrl({ pattern: ["fullgpp"],desc: 'set  profile picture of group with any resolution', sucReact: "🔥",  category: ["all", "create"], },
	async (message, client) => {
        if(message.client.isCreator && message.quoted){
        if(!message.isGroup) return;
		let download = await message.quoted.download();
		await message.updateProfilePicture(message.from,download );
      }
   }
);
inrl({ pattern: ["name"], usage: '<name>', sucReact: "🙃", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup){
    if (message.client.text > 25) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage('Text is too long') }, { quoted: message } ); };
    try {
        await client.sendMessage( message.from, { text: infoMessage("🙃 Changing group name.") }, { quoted: message } );
let txt = message.client.text || " ";
        await client.groupUpdateSubject(message.from, txt);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   };
  }
 }
);

inrl({ pattern: ["desc"], usage: '<desc>', sucReact: "🙂", category: ["group", "all"], },
  async (message, client) => {
if (message.client.isCreator && message.isGroup) {
    if (message.client.text > 80) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage('Text is too long') }, { quoted: message } ); };
        try {
        await client.sendMessage( message.from, { text: infoMessage("🙂 Changing group description.") }, { quoted: message } );
let txt = message.client.text || " ";
        await client.groupUpdateDescription(message.from, txt);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   }
  }
 }
);

//  ===============================================[multi-divice multiple plugins]=========================//

inrl({ pattern: ["mute", "unmute", "lock", "unlock"], sucReact: "🤙", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup) {
    try {
        if (message.client.command == "unmute") {
            await client.sendMessage( message.from, { text: infoMessage("⚙ Opening group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "not_announcement");
        } else if (message.client.command == "mute") {
            await client.sendMessage( message.from, { text: infoMessage("⚙ Closing group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "announcement");
        } else if (message.client.command == "unlock") {
            await client.sendMessage( message.from, { text: infoMessage("⚙ Unlocking group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "unlocked");
        } else if (message.client.command == "lock") {
            await client.sendMessage( message.from, { text: infoMessage("⚙ locking group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "locked");
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   }
  }
 }
);

// =============================[multi-divice]======================================================== //

inrl({ pattern: ["left"], sucReact: "👋", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup) {
    try {
        let mentions = await client.groupMetadata(message.from).participants;
        await client.sendMessage( message.from, { text: infoMessage("👋 Good Bye My Friends. I'M kicking"), mentions }, { quoted: message } );
        await client.groupLeave(message.from)
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   }
  }
 }
);

inrl({ pattern: ["link","invite"], sucReact: "💖", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup) {
    try {
        const code = await client.groupInviteCode(message.from);
        await client.sendMessage( message.from, { text: `🔗 Group Link: https://chat.whatsapp.com/${code}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   }
  }
 }
);

inrl({ pattern: ["revoke"], sucReact: "👌", category: ["group", "all"], },
  async (message, client) => {
    if (message.client.isCreator && message.isGroup) {
    try {
        const code = await client.groupRevokeInvite(message.from);
        await client.sendMessage( message.from, { text: `🔗 Group link revoked.` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
   };
  }
 }
);

// =============================================================================

inrl({ pattern: ["acpt"], sucReact: "🆗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage('Enter link') }, { quoted: message } ); };
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage(config.reply.owner) }, { quoted: message } ); };
    try {
        let urlArray = (message.client.args[0]).split("/"); 
        if (!urlArray[2] == 'chat.whatsapp.com') { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage('Enter valid link') }, { quoted: message } ); };
        const response = await client.groupAcceptInvite(urlArray[3]);
        await client.sendMessage( message.from, { text: `⚜ Joined: ${response}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);


inrl({ pattern: ["getinfo"], sucReact: "🆗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: errorMessage(config.reply.owner) }, { quoted: message } ); };
    try {
        let urlArray = (message.client.args[0]).split("/")[3]; 
        let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await client.groupGetInviteInfo(urlArray);
        await client.sendMessage( message.from, { text: `💗 Joined: ${id}\n ${owner} \n${subject} \n${subjectOwner} \n${subjectTime} \n${creation} \n${desc} \n${descOwner} \n${descId} \n${restrict} \n${announce} \n${size} \n${ephemeralDuration}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);
// this actul not a grp function but me😹

inrl({ pattern: ["pp"],desc: 'set  profile picture of bot', sucReact: "😁",  category: ["all", "create"], },
	async (message, client) => {
if(message.client.isCreator){
	let _message = message.quoted.imageMessage || message.client.text;
		let download = await client.downloadMediaMessage(_message);
		await client.updateProfilePicture(message.client.botNumber,download ).catch((err) => fs.unlinkSync(download))
      }
   }
);
inrl({ pattern: ["fullpp"],desc: 'set  profile picture of bot with any resolution', sucReact: "🔥",  category: ["all", "create"], },
	async (message, client) => {
        if(message.client.isCreator && message.quoted){
		let download = await message.quoted.download();
		await message.updateProfilePicture(message.client.botNumber,download );
      }
   }
);
