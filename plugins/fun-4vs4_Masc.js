var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = 'https://tinyurl.com/2648ennm'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => ``).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`Ingresa un horario`)
if (text.length < 0) return m.reply(`⚙️ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗠𝗔𝗟 𝗘𝗦𝗖𝗥𝗜𝗧𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗔 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢.`)
let mensaje = args.join` `
let yo = `│🕓 𝗛𝗢𝗥𝗔: *${text}*`
if (!text) return m.reply(`Ingresa un horario`)
if (text.length < 0) return m.reply(`⚙️ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗠𝗔𝗟 𝗘𝗦𝗖𝗥𝗜𝗧𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗔 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢.`)
let mensaje = args.join` `
let yo2 = `│➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: *${text2}*`
let texto = `╭──────⚔──────╮
ㅤㅤㅤ4 𝐕𝐄𝐑𝐒𝐔𝐒 4
╰──────⚔──────╯
╭──────────────╮
${yo}
${yo2}
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│⚜️ ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│⚜️ ➤ 
│⚜️ ➤ 
╰─────────────╯`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['4vs4masc <hora>']
handler.tags = ['ff']
handler.command = /^(4x4masc|4vs4masc)$/i
handler.admin = true
handler.group = true

export default handler