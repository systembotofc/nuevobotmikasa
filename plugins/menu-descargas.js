
let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🐈‍⬛')

let m2 = `
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭─── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊• *ɢᴇɴᴇꜱɪꜱ ʙᴏᴛ ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ*
. .╰─── ︶︶︶︶ ♡⃕  ⌇. . .
 . . ┊⿻ [ *ꜰᴇᴄʜᴀ* :: ${fecha}]. . 
 . . ┊⿻ [ *ᴠᴇʀꜱɪᴏɴ* :: ${vs} ] . .
 . . ┊⿻ [ *ᴄʀᴇᴀᴅᴏʀ* :: Angelito ]. . 
 . . ╰─────────╮

*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*


*╭─「 ɪ ᴍ ɢ  ʀ ᴀ ɴ ᴅ ᴏ ᴍ 」*
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.akira*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.akiyama*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.anna*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.asuna*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ayuzawa*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.boruto*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.chiho*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.chitoge*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.deidara*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.erza*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.elaina*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.eba*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.emilia*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.hestia*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.hinata*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.inori*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.isuzu*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.itachi*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.itori*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kaga*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kagura*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kaori*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.keneki*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kotori*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.kurumi*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.madara*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.mikasa*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.miku*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.minato*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.naruto*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.nezuko*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.sagiri*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.sasuke*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.sakura*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.cosplay*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.lolivid*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.waifu*_
*╰─────────────────┈°✿︎*
`
    let pp = 'https://i.ibb.co/jHctydb/Genesis-Bot.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ  ʙ ᴏ ᴛ  ᴘ ʀ ᴏ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)*/
conn.sendMessage(m.chat, {
      video: {url: "https://telegra.ph/file/4fba380f8873af7e8a581.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })

}

handler.help = ['menudl']
handler.tags = ['main']
handler.command = ['menudl', 'dlmenu'] 

export default handler