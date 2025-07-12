//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURPOFUrenlsNDQ2ODR2Njc2QUZuRC84TnJOWkZoVTh0YmlaZTFLYXlFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3VwVk5rU0VxSVRuUDNVT0ZhRnRDSnlPUk9pby9nMVR5S1VTUklaV1FSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUFc3SHFkNEZtZEdMeHAyTTd0cnVmZjF6Qm9jcVlQMDA3K3Z3cURVbVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QlNhM3BNb1lZcjBBVkNQelRsdWN1TXJIaXEvT01qTGs1UEhoQlZBM2drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9ObTZuWWkrOFpvekVlS0RmRS9Qait5NEgyZmU0aUhPdTNqU0JXZXlMVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlISEovbTJ0WDBsVkNBanEzN0hrU1NEMldPaHhCZXllRTd5eEVmVlFxR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFxVGZKeTZEVE9rU2tra2VpN3A2cDd0UkFBRzVZRCtRZUc1bUVxWWVHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGlkTmI1bVFlNUpmOG1VM0xKMTNxSUJXY2E2QzRCQXhyMWVQU29rd3ZFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhOVTFYR3lkdDJMbDNMYnZOa1lUTzJVdW5nU3luRC9BN0pvS1B1L1NJcVVSME4zMEs3TThWWUtUMlRWMGwzUWhYOVBKVTJwWkVnTmJtNjR4ZHRJVWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6InJKeVQ1OHZHMUh1eSt3c3M2NWZpTDBRSnpwNks3ZFdweko5d1AxQVNmK1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVrTEhhcURkUUxxMkJxZmJIVHNYU3ciLCJwaG9uZUlkIjoiNzBhYzkyOTItMjA4ZC00NTA1LTgxMzAtZDE1MTBjZDA2MDVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJYXpQMm53b05BL1kzZk9kNVl1elg2TTF1Yz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSXNBalNkNkp0S2NlRThWVVZWc0xxNmJ2M289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFkyUEtWV0YiLCJtZSI6eyJpZCI6Ijk0Nzg0MzMxMTgwOjM4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg5NjUzNDkxNjU4OTk0OjM4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmVuajhVREVQcVN5TU1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDZIN3puU05hY0RJd0V0OTVPUTBQYTFsS21kZHFJWm9oajl2V1RFc1VqND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRkQrQ0JQYjg0Q2dxNVBFT1lycEJEMHlUV21YajNDem1EckdFcS9MNmRTUGt1RzA2RlFBSk4xb0tobDB5NWRoRjkyMzBLbUF2VVhOWE5NN00zOWdsQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJpUjl0TEZyeVN1SHE0MUpFd1I3bDZ2UWNGRWRmbFVxa014eTVjbTFBWm9EZjBoV1NNbjZvVTBrMGdMNmJKbFNFZXFzNUd6YUh5UTJXUGlqTkF5UmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQzMzExODA6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUitoKzg1MGpXbkF5TUJMZmVUa05EMnRaU3BuWGFpR2FJWS9iMWt4TEZJKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMzA0MDA3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJFSiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784331180",
  PASSWORD: 
    process.env.PASSWORD || "sasilu123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
