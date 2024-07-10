import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()

 global.rcanalid = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363220939514640@newsletter",
      serverMessageId: 100,
      newsletterName: namechannel,
    },
    },
  }

 global.adReply = {
            contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
                                    showAdAttribution: true,
                                        title: packname,
                                        body: hola,
                                        mediaUrl: null,
                                        description: null,
                                        previewType: "PHOTO",
                                        thumbnailUrl: img,
                    thumbnail: img,
                           sourceUrl: canal,
                           mediaType: 1,
                   renderLargerThumbnail: true
                                }
                        }
                }
}