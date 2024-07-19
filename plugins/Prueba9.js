// COMBINACIÓN DE MENSAJES
// Adaptar el simple.js
let handler = async (m, { conn, usedPrefix, command, text }) => {

// MENSAJE CARUSEL CON TODOS LOS BOTONES DISPONIBLES
// Si las ids no te funciona con usedPrefix, tendrás que definirlas, ejemplo /menu
        m.react('🐈‍⬛') 
const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "CANAL GENESIS", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},]  
const messages = [[ // CARRUSEL 1
'CANAL OFICIAL 🐈‍⬛', 
'@usxr_angelito0',
'https://telegra.ph/file/b5aa194800f54bbb1314b.jpg',
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[['Texto para copiar 1'] /* etc... */],
[['Canal 🐈‍⬛', fgcanal] /* etc... */]
], [ // CARRUSEL 2
'Descripción de Carrusel 2',
'@usxr_angelito0',
'https://telegra.ph/file/b5aa194800f54bbb1314b.jpg',
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[['Texto para copiar 1'] /* etc... */],
[['Canal 🐈‍⬛', fgcanal] /* etc... */]
], [ // CARRUSEL 3
'Descripción de Carrusel 3',
'@usxr_angelito0',
'https://telegra.ph/file/ec725de5925f6fb4d5647.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [ // CARRUSEL 4
'Descripción de Carrusel 4',
'@usxr_angelito0',
'https://telegra.ph/file/7acad0975febb71446da5.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]] /* etc... */
await conn.sendCarousel(m.chat, '`G` `R` `U` `P` `O` `S`\n\n`G` `E` `N` `E` `S` `I` `S`', '@usxr_angelito0', 'GENESIS BOT OFC 🐈‍⬛', messages, m)            

}
handler.command = /^(carousel)$/i
export default handler