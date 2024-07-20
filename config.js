const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/6KY2PBZF4YC3E1";
global.website=process.env.GURL || "https://wa.me/message/6KY2PBZF4YC3E1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || " POWERED BY'SAMCOMMS_INTERNET_SERVICES'" 


global.devs = "2348060853094" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060853094";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348060853094,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_40_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNNUDdPWW9lYlRLaG9KcER1V3B6TkorRjRtMmZiUGVNOHgxbGEwMmNldEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2MDg1MzA5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTIyQUVCRkE0QzlDRUIxQTcwMUZGQ0I0ODJDNEJBQTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDYxMjI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA2MDg1MzA5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUEyQUMyMENDQTA4NjQ3RUFDM0ZFNEIxM0ExMTAyODFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDYxMjMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU1aUR3TUIzU1d1UUtYbmxXcXBVQkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGFiZTRiZTYtMzZkNS00OTIxLTlhOTAtODI2NDk1Mjc2NzM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMzksXG4gICAgICAxMjUsXG4gICAgICAxMTUsXG4gICAgICAxOTQsXG4gICAgICAyMTQsXG4gICAgICAyMjYsXG4gICAgICAyMDEsXG4gICAgICAyMjUsXG4gICAgICA5NixcbiAgICAgIDI0MCxcbiAgICAgIDAsXG4gICAgICA4OCxcbiAgICAgIDEyMSxcbiAgICAgIDIzNixcbiAgICAgIDIxOSxcbiAgICAgIDUwLFxuICAgICAgNDYsXG4gICAgICA5MyxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAxOTMsXG4gICAgICAxOTMsXG4gICAgICAxNzEsXG4gICAgICAyNDksXG4gICAgICAxMzcsXG4gICAgICAyMzIsXG4gICAgICA4NCxcbiAgICAgIDE1MCxcbiAgICAgIDIzOSxcbiAgICAgIDkwLFxuICAgICAgODQsXG4gICAgICA4MyxcbiAgICAgIDEyNSxcbiAgICAgIDIxMixcbiAgICAgIDIwLFxuICAgICAgNjQsXG4gICAgICA5NixcbiAgICAgIDczLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY0WEMzRTlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYwODUzMDk0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTc4NDU5NzI1ODMzMjo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNBTUNPTU1TX19fXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGZLbU1RQkVPZlQ3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJONDJkWHRqdFlqend2dlY0eUs1aEZZOVlseE1taWN0anFEOGZRL1Q4c2pBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJsb2dWRUh1a055L3Q0aFJqMEhNdkpFcVcvdTFzSGRsLy9rMEpHWG9ub08rWUZlaE1oS3VVZGlCUGR2T2RXM2YyenZWcFRDZGxGZmJ1VGsrbU5UYkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxEa2JVNnRDbERDUmdTMWhVakN0SERXT09qdldNSDZHSStSV0lzaU1yR0hLMVhPREtqMmI0ckRxQyt4KyszNVhzd1F4UHZzT2YzNVpidW1rTm5OdURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjA4NTMwOTQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NjEyMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPNTFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU81MS5qc29uIjogIntcImtleURhdGFcIjpcIkZFZXorK2tremU0b2tHcE5udUJUT294bmVuTFcvNFJEOUNXY1dCQjc2cmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDExNDQ0NTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjEyMzEzNjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```POWERED BY'SAMCOMMS_INTERNET_SERVICES'```"),
 
  author : process.env.PACK_AUTHER|| "SAMCOMMS_BOT_ 😎",
  packname: process.env.PACK_NAME || "SAMCOMMS_BOT_ 😎",
  botname : process.env.BOT_NAME  || "SAMCOMMS_BOT_ 😎",
  ownername:process.env.OWNER_NAME|| "SAMCOMMS_BOT_ 😎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "LUFFY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
