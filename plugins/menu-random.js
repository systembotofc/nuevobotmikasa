
let handler = async function (m, { conn, text, usedPrefix }) {

   m.react('🍂')

let m2 = `
*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭─── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊• *ɴᴏᴍʙʀᴇ* :: %name
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
`
}
    let pp = 'https://i.ibb.co/xFZzGjp/file.jpg' 
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `⭐ Powered by FG98 https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      sbot: (conn.user.jid == global.conn.user.jid ? '' : `\n▢ ✨ *Sub-Bot de:*\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ  ʙ ᴏ ᴛ  ᴘ ʀ ᴏ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)


}

handler.help = ['menurandom']
handler.tags = ['main']
handler.command = ['menurandom', 'menúrandom'] 

export default handler