// COMBINACIÓN DE MENSAJES
// Adaptar el simple.js
let handler = async (m, { conn, usedPrefix, command, text }) => {

// MENSAJE CARUSEL CON TODOS LOS BOTONES DISPONIBLES
// Si las ids no te funciona con usedPrefix, tendrás que definirlas, ejemplo /menu
const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},]  
const messages = [[ // CARRUSEL 1
'Canal oficial de GenesisBot 🐈‍⬛', 
'@usxr_angelito',
'https://telegra.ph/file/b5aa194800f54bbb1314b.jpg',
[['Botón1', usedPrefix + 'menu'], ['Botón2', 'Id2'] /* etc... */],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[['Enlace1', fgcanal], ['Enlace2', 'https://example.com/link2'] /* etc... */],
[['Botón Lista 1', sections], ['Botón Lista 2', sections] /* etc... */]
], [ // CARRUSEL 2
'Descripción de Carrusel 2',
'Footer de Carrusel 2',
'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [ // CARRUSEL 3
'Descripción de Carrusel 3',
'Footer de Carrusel 3',
'https://telegra.ph/file/ec725de5925f6fb4d5647.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [ // CARRUSEL 4
'Descripción de Carrusel 4',
'Footer de Carrusel 4',
'https://telegra.ph/file/7acad0975febb71446da5.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]] /* etc... */
await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m)            

}
handler.command = /^(carousel)$/i
export default handler