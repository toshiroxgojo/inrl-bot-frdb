const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
module.exports = {
    VERSION: 'V 1.0.0',
    SESSION_ID: process.env.SESSION_ID || '',
    PASSWORD: process.env.PASSWORD || '',
    REACT : process.env.REACT || 'false',
    GROUP_CHAT : process.env.GROUP_CHAT || 'false',
    FREE_TXT : process.env.FREE_TXT || 'inrlbotmd',
    U_STATUS: process.env.U_STATUS || 'true',
    ALIVETXT: process.env.ALIVETXT || 'INRL-BOT-MD',
    ALIVE_DATA : process.env.ALIVE_DATA || "https://i.imgur.com/DyLAuEh.jpg,aliveText,alivebButtenText1,aliveTextButten2",
    READ_CHAT : process.env.READ_CHAT || "false", //values are true and false only if true read all chats
    MENTION: process.env.MENTION || 'on',
    BOT_INFO : process.env.BOT_INFO || "INRL-BOT-MD,INRL,https://i.imgur.com/DyLAuEh.jpg",
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'public',
    PM_BLOCK : process.env.PM_BLOCK || "false",
    WELCOME_SET : process.env.WELCOME_SET || "true", //now thi scmd is not creted creating
    EXIT_MSG : process.env.EXIT_MSG || "true", //now this cmd  was not created
    CALL_BLOCK : process.env.CALL_BLOCK || "false",
    ANTI_LINK_ALL : process.env.ANTI_LINK_ALL || "false", //now this cmd  creted!use with casesencitivity
    FACK_REMOVE : process.env.FACK_REMOVE || "2222", //sorry about thets! This cmd was created but don't work 
    SET_ANTI_LINK : process.env.SET_ANTI_LINK || "instagram.com", //now this cmd creted 
    MENSION: {
        MENSION_AUDIO : process.env.MENSION_AUDIO || 'https://i.imgur.com/5NZDe8m.mp4,https://i.imgur.com/c6wEqlx.mp4,https://i.imgur.com/5lniXiJ.mp4,https://i.imgur.com/kYzbJbx.mp4',
        MENSION_IMG : process.env.MENSION_IMG || 'https://imgur.com/ggvhL6C.jpg, https://i.imgur.com/DyLAuEh.jpg, https://imgur.com/AelfUJg.jpg',
        MENSION_TEXT : process.env.MENSION_TEXT || 'ᴊᴜꜱᴛ ᴛᴇꜱᴛɪɴɢ, 𝚒𝚝𝚜𝚖𝚎 𝚒𝚗𝚛𝚕, https://chat.whatsapp.com/CUJuk1xPEpR8av9h7DDGNO'
    },
    LANG : (process.env.LANGUAG || 'EN').toLowerCase(), //values are ml, en only
    OWNER : process.env.OWNER || "917593919575",
    BRANCH: 'master',
    PROCFILE_DATA : process.env.PROCFILE_DATA || "💗 ᴀᴜᴛᴏ ᴍᴀᴛɪᴄ ʙɪᴏ ʙy ɪɴʀʟ-ʙᴏᴛ-ᴍᴅ",
    BAD_WORD_TEXT : process.env.BAD_WORD_TEXT || 'xxx, xnxx',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    BLOCK_CHAT : process.env.BLOCK_CHAT ||[],
    AUTO_CHAT_PM : process.env.AUTO_CHAT_PM || "false",
    AUTO_CHAT_GRP : process.env.AUTO_CHAT_GRP || "false",
    BOT_PRESENCE : process.env.BOT_PRESENCE || "recording",
    IS_PRESENCE : process.env.IS_PRESENCE || "false",
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    AUDIO_DATA : process.env.AUDIO_DATA || "inrl, ibot,https://i.imgur.com/DyLAuEh.jpg",
    STICKER_DATA: process.env.STICKER_DATA || "inrl, ibot,https://i.imgur.com/DyLAuEh.jpg",
    INSTAGRAM : process.env.INSTAGRAM || "https://instagram.com/_user_not_define",
    PACKNAME : process.env.PACKNAME || "ɪɴʀʟ-ʙᴏᴛ",
    GIT : process.env.GIT || "https://tinyurl.com/3ex3e48e",
    WEB : process.env.WEB || "https://tinyurl.com/ycks3s8p",
    YT : process.env.YT || "https://tinyurl.com/36r3668n",
    CAPTION : process.env.CAPTION || "_created by inrl-bot_",
    SUDO: process.env.SUDO || "917593919575",
    VIDEO : "https://tinyurl.com/3x38ajmn",
    WAGRP : process.env.WAGRP || 'https://tinyurl.com/f5wh55mk',
    };
