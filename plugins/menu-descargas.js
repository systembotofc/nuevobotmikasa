
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


*╭─「 `ᴅ ᴇ ꜱ ᴄ ᴀ ʀ ɢ ᴀ ꜱ` 」*
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.danbooru <link> <url>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.facebook <url>*_ (ⓓ)
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.gdrive*_ (ⓓ)
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.gitclone <url>*_ (ⓓ)
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.igstalk*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.igstory*_ (ⓓ)
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.mediafire <url>*_ (ⓓ)
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.mega*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.play*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.play*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.play2*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.spotifydl *<url>**_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.tiktok <url tt>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.tiktokstalk*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ytmp3 <url yt>*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ytmp3doc *<link yt>**_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ytmp4doc *<link yt>**_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ytsearch*_
*┊᥀·࣭࣪̇˖🐈‍⬛◗*  _*.ytmp4 <url yt>*_
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
      video: {url: "https://telegra.ph/file/82686cbca76055f946e94.mp4"},
      gifPlayback: true,
      caption: m2.trim(),
      })

}

handler.help = ['menudl']
handler.tags = ['main']
handler.command = ['menudl', 'dlmenu'] 

export default handler