// códigos totalmente hecho por Wilmer oficial 
// https://github.com/Wilsmac
// deje créditos si usará el código ☄️

import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*LOS COMANDOS 🔞 ESTÁN DESACTIVADOS, SI USTED ES MI CREADOR(A) USE #on modohorny*`
let url = muslos[Math.floor(Math.random() * muslos.length)]
conn.sendButton(m.chat, `🌌 _${command}_ 🌌`.trim(), packname, url, [['🐈‍⬛ SIGUIENTE 🐈‍⬛', `/${command}`]], null, null, m)
}
handler.help = ['muslos']
handler.tags = ['nsfw']
handler.command = /^(muslos)$/
export default handler

global.muslos = [
"https://i.imgur.com/uGzFdVD.jpg",
"https://i.imgur.com/XLNHZDB.jpg",
"https://i.imgur.com/97wc7tf.jpg",
"https://i.imgur.com/xUS74sl.jpg",
"https://i.imgur.com/T3J0a0V.jpg",
"https://i.imgur.com/ZXGstbh.jpg",
"https://i.imgur.com/tFnHUzu.jpg",
"https://i.imgur.com/bLuKAkv.jpg",
"https://i.imgur.com/KqwqwWT.jpg",
"https://i.imgur.com/HNRFA2d.jpg",
"https://i.imgur.com/maj2vCy.jpg",
"https://i.imgur.com/Wtka9lQ.jpg",
"https://i.imgur.com/iPxVsRN.jpg",
"https://i.imgur.com/CGxMkwR.jpg",
"https://i.imgur.com/Vcv90HQ.jpg",
"https://i.imgur.com/N0kcxJh.jpg",
"https://i.imgur.com/opFmmKu.jpg",
"https://i.imgur.com/lVe9ay0.jpg",
"https://i.imgur.com/nfTWjuE.jpg",
"https://i.imgur.com/ojCMG7G.jpg",
"https://i.imgur.com/KoV3pwz.jpg",
"https://i.imgur.com/M8MnbCE.jpg",
"https://i.imgur.com/RVGS8Bc.jpg",
"https://i.imgur.com/kV063RZ.jpg",
"https://i.imgur.com/xYQZ73z.jpg",
"https://i.imgur.com/TzG2ozI.jpg",
"https://i.imgur.com/d957bf9.jpg",
"https://i.imgur.com/Sz7O8Na.jpg",
"https://i.imgur.com/ots1C4k.jpg",
"https://i.imgur.com/6LoLi5T.jpg",
"https://i.imgur.com/vMdbESU.jpg",
"https://i.imgur.com/0wTQqWo.jpg",
"https://i.imgur.com/h5Uzg3B.jpg",
"https://i.imgur.com/hD2ZDaL.jpg",
"https://i.imgur.com/xQdMTML.jpg",
"https://i.imgur.com/0l5nTKw.jpg",
"https://i.imgur.com/55SqTTm.jpg",
"https://i.imgur.com/SIqr2Ju.jpg",
"https://i.imgur.com/YxAw706.jpg",        
"https://i.imgur.com/rssXY6l.jpg",
"https://i.imgur.com/sh9KrZP.jpg",        
"https://i.imgur.com/RJFX4Md.jpg",
"https://i.imgur.com/eDZ1qIC.jpg",
"https://telegra.ph/file/2598fa337501d07a1ee34.jpg",
"https://telegra.ph/file/dc924cf671d05d419253d.jpg",
"https://telegra.ph/file/6d99ef2243795ff1d5ffd.jpg",
"https://telegra.ph/file/037134d264fc7c4d1c6cc.jpg",
"https://telegra.ph/file/aedca78cb811736e726ba.jpg",
"https://telegra.ph/file/d465caca57579d50a7c2e.jpg",
"https://telegra.ph/file/bf86e1f75a95eea99b4ab.jpg",
"https://telegra.ph/file/9a5344fbd4d991a2abe10.jpg",
"https://telegra.ph/file/df89dc91db527000130f1.jpg",
"https://telegra.ph/file/b326b9fc5377868dc109d.jpg",
"https://telegra.ph/file/7cadef4158c8de49aac1c.jpg",
"https://telegra.ph/file/391020e56ffaeef0b5019.jpg",
"https://telegra.ph/file/cc2744f1a5ab0ece1c441.jpg",
"https://telegra.ph/file/2c21a337c13b5902eafb6.jpg",
"https://telegra.ph/file/dfbd963918beebd712685.jpg", 
"https://telegra.ph/file/5e261fe45beaf6c6d34ee.jpg",
"https://telegra.ph/file/55e8bf3da593489d8bd65.jpg"
];
