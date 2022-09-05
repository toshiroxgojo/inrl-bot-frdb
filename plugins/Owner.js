const faz = require('../lib/perfix');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const config = require('../lib/config');
faz.bot({ pattern: ['owner','creater', 'devoleper'], fromMe: false, desc: 'owner number' }, async (message, client ) => {

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ɪɴʀʟ-ʙᴏᴛ-ᴍꜰ\n' // full name
            + 'ORG:ɪɴʀʟ-ᴛᴇᴀᴍ;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.from,{
        contacts: { 
            displayName: 'ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ', 
            contacts: [{ vcard }] 
        }
    }
)
});
