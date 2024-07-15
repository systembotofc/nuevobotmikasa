let handler = async (m, { conn, participants, groupMetadata, args, text }) => { 
const pp = 'https://tinyurl.com/2648ennm';
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`Ingresa un horario`)
if (text.length < 0) return m.reply(`⚙️ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗠𝗔𝗟 𝗘𝗦𝗖𝗥𝗜𝗧𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗔 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢.`)
let mensaje = args.join` `
let yo = `│🕓 𝗛𝗢𝗥𝗔: *${text}*`
let text = 
`
╭──────>⋆☽⋆ ⋆☾⋆<──────╮
ㅤ   𝙂𝙐𝙀𝙍𝙍𝘼 𝘿𝙀 𝘾𝙇𝘼𝙉𝙀𝙎
         ${groupMetadata.subject}
╰──────>⋆☽⋆ ⋆☾⋆<──────╯
╭───────────────────╮
${yo}
│➥ 𝙅𝙐𝙂𝘼𝘿𝙊𝙍𝙀𝙎:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟏
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│     
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟐
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟑
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟒
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟓
│
│🔮 ➤ 
│🔮 ➤
│🔮 ➤ 
│🔮 ➤ 
│
│    𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 ➹𝟔
│
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒:
│🔮 ➤ 
│🔮 ➤
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
│🔮 ➤ 
╰───────────────────╯
`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(guerra|guerradeclanes)$/i
handler.admin = true;
handler.group = true
export default handler