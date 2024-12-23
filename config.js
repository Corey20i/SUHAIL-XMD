const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349078795830";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_25_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICA2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVXI3YUxnb0lyZmVaQS9nZksycTFQa2JXd3dhZGg0TXNueUk1NVRxSUtncz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2IwOS1lYXJTSENoRDBlR01FeFI3Z1wiLFxuICBcInBob25lSWRcIjogXCI4NTIzYzhhNy04ZmYxLTQ2ZDUtYmRiMS00OWEwYjZhYzc0YzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgODksXG4gICAgICAxOSxcbiAgICAgIDEzMCxcbiAgICAgIDE1NixcbiAgICAgIDE2LFxuICAgICAgMTc4LFxuICAgICAgNDksXG4gICAgICAxNTAsXG4gICAgICA3OCxcbiAgICAgIDY3LFxuICAgICAgMTAzLFxuICAgICAgMTE3LFxuICAgICAgMTUsXG4gICAgICAyNDIsXG4gICAgICAyNTAsXG4gICAgICAxNzQsXG4gICAgICAxODUsXG4gICAgICAyMjAsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAyNDAsXG4gICAgICAyMTksXG4gICAgICA3OSxcbiAgICAgIDE5MCxcbiAgICAgIDE5MixcbiAgICAgIDIwMixcbiAgICAgIDI1MSxcbiAgICAgIDIxMCxcbiAgICAgIDE0MixcbiAgICAgIDkyLFxuICAgICAgMjA2LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICAzLFxuICAgICAgMTgsXG4gICAgICAxNDgsXG4gICAgICA5OCxcbiAgICAgIDEwMCxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWlc1UEVDNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3ODc5NTgzMDo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ2OTY5ODcxODAyNTQ3OjkxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1bjRia0ZFSnl0cGJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTXZIcWswVnVqZ2F2VEZWdHBmd0I2OUY4ZVhXSDQ3N2UzQ05Zb25wRWJFUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpSjI3dXNsVDhmcWlWOE10QzNTRGYvc21ITDBKM01teUJibW5lR3NsNDVhcm1Cc09sR0FYQWtvZnVRUXNRUVdtcmNvbkxyTDNnamE1RkJkb3dlQnhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmbHMyQ2NReU1XRGVRekxVSjFKTDZLTlRhdmNTMjB0aFJ0TXkvYTZkaUZ2Sm00KzZYcThuUmwvNXdFSGlIaEZRbnNPUWxqTlFNMHV3ZndrQUt6czFBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc4Nzk1ODMwOjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTU2NzA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlRrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwWC90bVJmVStuMDZSc2dVNDdLQTRrZjk0SnpSckRQL05UWTVWS0FESHlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjMzMDkzMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ3OTk3NjM3NzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
