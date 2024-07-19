/** 
 *  Created By YukiSmall
 *  SOURCE CODE FOR OSINT IMAGE
 *  Copyright 2024 MIT LICENSE
 *  My Github : https://github.com/AmmarrBN
 *  My Instagram : https://instagram.com/ammarbn27
 *  My Youtube : https://youtube.com/@AmmarExecuted
*/

import fetch from 'node-fetch';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg  q).mimetype  '';
  let url = m.text.split(' ')[1];

  if (url) {
    // Jika URL diberikan secara langsung
    var link = url;
  } else if (mime) {
    // Jika gambar direply
    let media = await q.download();
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    var link = await (isTele ? uploadImage : uploadFile)(media);
  } else {
    throw '✳️ Balas Gambar/Url\nExample: .osmage https://telegra.ph/file/db308811777d4f7bb83dc.png';
  }

  let apiUrl = https://api.ryochinel.my.id/api/osmage?url=${encodeURIComponent(link)}&apikey=yk;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      let { city, country, explanation, latitude, longitude, state } = data.result;
      let resultMessage = > *Hoshiyuki Osint Img*\n======================\n- *City*: ${city}\n- *Country*: ${country}\n- *Explanation*: ${explanation}\n- *Latitude*: ${latitude}\n- *Longitude*: ${longitude}\n- *State*: ${state}\n======================\n> CREATED BY YUKISMALL;
      m.reply(resultMessage);
    } else {
      m.reply('❌ Failed to get image information. Please try again later.');
    }
  } catch (error) {
    m.reply('❌ An error occurred. Please try again later.');
  }
};

handler.help = ['osmage'];
handler.tags = ['ai'];
handler.command = ['osmage', 'osm'];

export default handler;


*[THANKS TO YUKISMALL]*