import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = 'https://i.ibb.co/xFZzGjp/file.jpg';
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭─── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊• *ɴᴏᴍʙʀᴇ* :: @${m.sender.split`@`[0]}
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
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🔮 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙮 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙥𝙤𝙧𝙩𝙚𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menurandom2|menurandom3)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}