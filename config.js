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
    MENTION: process.env.MENTION || 'on',
    BGMBOT : process.env.BGMBOT || 'false',
    WORKTYPE: process.env.WORKTYPE || 'public',
    LANG :process.env.LANG || 'EN', //values are ml, en only
    OWNER : process.env.OWNER || "917593919575",
    BRANCH: 'master',
    ANTILINK : process.env.ANTILINK || 'youtube',
    ANTIFAKE : process.env.ANTIFAKE || '+2222',
    ALL_LINK_BAN : process.env.ALL_LINK_BAN || 'false',
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    profile: {
    ownerName: "inrl", 
    ownerNumb: "917593919575", 
    botName: "inrl-bot-md", 
  },
    setting: {
    blockchat: [], // Your block chat Jids
  },
    auto: {
      chat: {
      group: "off", // Chat Bot In Group | u can set true or false
      inbox: "off", // chat bot in inbox | u can set true or false
    },
    reply: {
      sticker: false, // Boolean | ===== It not created now ======
      audio: false, // Boolean | ===== It not created now ======
    },
    presence: {
      is: false, // U Can on or off this () | u can set true or false
      value: "recording", // It has two types | u can set 'recoding' or 'typing'
    },
    read: false, // Boolean | ===== It not created now ======
  },
    CHATBOT : process.env.CHATBOT || 'null',
    FOOTER : process.env.FOOTER || "ɪɴʀʟ-ᴍᴅ",
    ALIVE : process.env.ALIVE || "https://i.imgur.com/DyLAuEh.jpg",
    IMG11 : process.env.IMG11 || "https://i.imgur.com/DyLAuEh.jpg",
    IMG12 : process.env.IMG12 || "https://imgur.com/AelfUJg.jpg",
    ERRIMG : process.env.ERRIMG || "https://imgur.com/ggvhL6C.jpg",
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
