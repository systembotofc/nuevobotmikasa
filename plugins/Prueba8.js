let handler  = async (m, { conn, usedPrefix, command }) => {
let url = await tiktokhot[Math.floor(Math.random() * tiktokhot.length)]
await m.react('😈')
conn.sendButton(m.chat, `😈 _${command}_ 😈`.trim(), packname, url, [['😈 SIGUIENTE 😈', `/${command}`]], null, null, m)
}
handler.help = ['tiktokhot']
handler.tags = ['random']
handler.command = /^(tiktokhot)$/i
export default handler
global.tiktokhot = [
"https://telegra.ph/file/7266c4a284d0a2df54589.mp4",
"https://telegra.ph/file/40c07f641420a80b0f8cf.mp4",
  "https://telegra.ph/file/daa050ed7baa88ac2d4b8.mp4",
"https://telegra.ph/file/cd493e2a01bc573f94638.mp4",
  "https://telegra.ph/file/f18ec6e0a33f97c3d8710.mp4",
"https://telegra.ph/file/79816642cc73eb500d2fe.mp4"
]