import axios from 'axios'

let handler = async (m, {usedPrefix, command, conn, text }) => {

if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*INGRESA EL USUARIO DE TIKTOK*\n_Ejemplo: ${usedPrefix + command} <username>_'
try {
m.reply(wait)
let ress = await axios.get(`https://www.api-nightmares.my.id/api/tiktok-stalk?q=${text}&apikey=Tio`)
let res = ress.data
let teks = `乂  *STALKER TIKTOK*

🐈‍⬛ *Nombre:* ${res.result.username}
👤 *Usuario:* ${res.result.name}
🔮 *Seguidores:* ${res.result.followers}
🫧 *Siguiendo:* ${res.result.following}
⛱️ *Descripción:* ${res.result.description}`
await conn.sendMessage(m.chat, {image: {url : res.result.pp_user}, caption: teks}, {quoted: m})
} catch (err) {
m.reply('Error Nombre de usuario no encontrado\n¡Envíe un nombre de usuario válido!')
}

}
handler.help = ['tiktokstalk <username>']
handler.tags = ['dl']
handler.command = /^(tiktokstalk|stalktiktok|ttstalk)$/i
handler.limit = true
export default handler