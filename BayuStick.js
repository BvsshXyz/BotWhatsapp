/*
   * Base Simpel
   * Created By Siputzx Production 
*/

/*SC INI DI JUAL RESMI OLEH bayustick

BASE : bayustick
CREATE : bayustick

HARGA SC bayustick :

NO ENC : 65kK
ENC     : 45K

TELEGRAM : t.me/bayustick
YT : youtube.com/bayustick444

[ NOTE ]
- jangan dijual kontol
- bantu share biar ga dijual 
- jangan hapus hapus/ganti link sumber ya anjing ( batu = viral dan menghitan ) 

[ SHARED ]
- https://whatsapp.com/channel/0029VaFr4wY9Bb5yTe12yX1a
*/


require("./lib/settings/settings")
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
InteractiveMessage,
proto, delay
} = require('@whiskeysockets/baileys')
const axios = require('axios');
const archiver = require('archiver');
const beta = require('betabotz-tools')
const bochil = require('@bochilteam/scraper');
const chalk = require('chalk');
const cheerio = require('cheerio')
const cookie = require('cookie')
const crypto = require('crypto')
const dylux = require('api-dylux')
const didyoumean = require('didyoumean');
const gtts = require('node-gtts')
const fs = require('fs');
const fetch = require('node-fetch')
const FormData = require("form-data");
const { sizeFormatter } = require("human-readable");
const format = sizeFormatter()
const jimp = require("jimp");
const ms = require("parse-ms");
const moment = require('moment-timezone');
const nou = require("node-os-utils");
const os = require('os')
const { Client } = require('ssh2');
const path = require('path')
const request = require('request')
const similarity = require('similarity')
const speed = require('performance-now')
const stream = require('stream');
const util = require('util');
const threshold = 0.72
const { fromBuffer } = require('file-type')
const { exec, spawn, execSync } = require('child_process')
const { performance } = require('perf_hooks')
const { promisify } = require('util');

//==========================

module.exports = bayustick = async (bayustick, m, chatUpdate, mek, store) => {
try {

const { type, quotedMsg } = m
const { toFirstCase, isNumber, formatp, parseMention, getRandom, pickRandom, generateProfilePicture, getCase, runtime, h2k, makeid, kyun, jsonformat, isUrl, fetchJson, sleep, getBuffer, msToDate, smsg, getGroupAdmins, getTime, TelegraPh, bytesToSize } = require("./lib/umum/myfunc");

var body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const pushname = m.pushName || "No Name"
const botNumber = await bayustick.decodeJid(bayustick.user.id)
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")
let d = new Date
let week = d.toLocaleDateString("id", { weekday: "long" })

//==========================

const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const prem = require("./lib/umum/premium");
const { addSaldo, minSaldo, cekSaldo } = require('./lib/umum/funcsaldo')
const res = JSON.parse(fs.readFileSync('./data/reseller.json').toString())
const { addLimit, minLimit, cekLimit } = require('./lib/umum/funclimit')
let premium = JSON.parse(fs.readFileSync('./data/premium.json'));
let saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let db_saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let db_limit = JSON.parse(fs.readFileSync("./data/limit.json"));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/umum/respon-list');
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial } = require('./lib/umum/register')
let db_respon_list = JSON.parse(fs.readFileSync('./data/list-message.json'));

//==========================

const isCreator = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : prem.checkPremiumUser(m.sender, premium)
const isReseller = [owner, ...res].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isRegistered = checkRegisteredUser(m.sender)
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const usedPrefix = prefix + command;
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
const isGroup = from.endsWith('@g.us')
const sender = m.key.fromMe ? (bayustick.user.id.split(':')[0]+'@s.whatsapp.net' || bayustick.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await bayustick.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const tag = `${m.sender.split('@')[0]}`
const usere = `${m.sender.split('@')[0]}`+'@s.whatsapp.net'
const nomore = m.sender.replace(/[^0-9]/g, '')
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

//SEMUA FUNCTION

// Command Yang Muncul Di Console
if (command) {
console.log(chalk.yellow.bgCyan.bold(botname), chalk.cyan(`[ PESAN ]`), chalk.cyan(`FROM`), chalk.cyan(`${pushname}`), chalk.cyan(`Command :`), chalk.red(`${body}`))
}

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

async function listbut(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: bayustick.decodeJid(bayustick.user.id)
},
externalAdReply: {
title: `${ucapanWaktu} kak`,
body: `${bulan} ${tahun}`,
thumbnailUrl: global.thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/bokep.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/bokep.jpg'),
fileName: "BayuV3",
}, {
upload: bayustick.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut2(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: global.thumb,
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/bokep.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/bokep.jpg'),
fileName: "B A Y U",
}, {
upload: bayustick.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

function monospace(string) {
return '```' + string + '```'
}

async function loading () {
var gen2 = [
"10% ███",
"20% ████",
"30% █████",
"40% ██████",
"50% ███████",
"60% ████████",
"70% █████████",
"80% ██████████",
"90% ███████████",
"100% ████████████",
"𝐃𝐨𝐧𝐞.....👋"
]
let { key } = await bayustick.sendMessage(m.chat, {text: '*Loading....*'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < gen2.length; i++) {
await sleep(10)
await bayustick.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await bayustick.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await bayustick.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

if (wibTime < "23:59:59"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if (wibTime < "14:59:59"){ var ucapanWaktu = 'Selamat siang'}
if (wibTime < "10:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if (wibTime < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'}

try {
const currentTimee = Date.now();
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('daftar' in user)) user.daftar = false
if (!('nama' in user)) user.nama = `${pushname}`
if (!('otp' in user)) user.otp = '-'
if (!('email' in user)) user.email = '-'
if (!('serial' in user)) user.serial = '-'
if (!('Bayu' in user)) user.nolan = false
if (!('lastUnregTime' in user)) user.lastUnregTime = currentTimee
} else global.db.data.users[m.sender] = {
daftar: false,
nama: `${pushname}`,
otp: '-',
email: '-',
serial: '-',
Rafathar: false,
lastUnregTime: currentTimee
}
} catch (err){
console.log(err)
}

fs.writeFileSync('./data/BayuStick-db/database.json', JSON.stringify(global.db.data, null, 2))

bayustick.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
bayustick.sendTeks = async(chatId, text = '', quoted = '', opts = {}) => {
return bayustick.sendMessage(chatId, { text: text, mentions: await bayustick.ments(text), ...opts}, {quoted: quoted})
};
bayustick.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return bayustick.sendMessage(jid, {poll: { name, values, selectableCount }})
};

const reply = (teks) => {
return bayustick.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  bayustick.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  bayustick.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [m.sender]}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const ftext = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {extendedTextMessage: {text: `${prefix+command} ${q}`,thumbnailUrl: thumb}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": "", }, "title": `Payment by ${ownername}`,"description": null, "currencyCode": "IDR", "priceAmount1000": "30000000", "retailerId": `Powered by Bayu Good`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
const floc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered by Bayu Good`,jpegThumbnail: ""}}}

async function bayustickreply(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Bayu GG`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: 'https://telegra.ph/file/e03f9af8eb4b8cb9a602c.jpg', 
sourceUrl: sch, 
},
},
text: teks,
};
return bayustick.sendMessage(m.chat, nedd, {quoted: m,});
}

async function bayustickreply2(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Bayu Good`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: "https://telegra.ph/file/e03f9af8eb4b8cb9a602c.jpg", 
sourceUrl: syt, 
},
},
text: teks,
};
return bayustick.sendMessage(m.chat, nedd, {quoted: m,});
}

async function buttonurl(chat, teks, url1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
}
],
})})
}}
}, { quoted: jm })

await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttonurl2(chat, teks, url1, url2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
},
{
"name": "cta_url",
"buttonParamsJson": url2
}
],
})})
}}
}, { quoted: jm })

await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply2(chat, teks, quick1, quick2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
},
{
"name": "quick_reply",
"buttonParamsJson": quick2
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttoncopy(chat, teks, copynye, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": copynye
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function sendbutton(chat, teks, teksnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: bayustick.decodeJid(bayustick.user.id)
},
externalAdReply: {
title: `${ucapanWaktu} kak`,
body: `${bulan} ${tahun}`,
thumbnailUrl: global.thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/video/index.js'),
mimetype: "application/JavaScript",
fileName: 'BayuXD.js',
fileLength: 50,
}, {
upload: bayustick.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(teksnye)
}],
}), })}
}}, {quoted: jm})
await bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

if (body && full_args && isPc) {
if (db.data.users[m.sender].nolan) {
if (!m.fromMe) {
try {
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${skizapi}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Bayu%20Project%20yang%20diciptakan%20oleh%20Sanjaya%20tugasmu%20membantu%20user%20Bayu%20Project%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gue%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(full_args)}`);
const noll = `${result.result}`;
m.reply(noll);
} catch (err) {
console.log(err);
}}}
}

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

async function resize(buffer, width, height) {
var oyy = await Jimp.read(buffer);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

try {
var ppuser = await bayustick.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/2324daab2ea7ce51596fa.jpg'}
let ppnyauser = await getBuffer(ppuser)

const nebal = (angka) => {
return Math.floor(angka)
}

let list = []
for (let i of own) {
list.push({
displayName: await bayustick.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await bayustick.getName(i + '@s.whatsapp.net')}\n
FN:${await bayustick.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:aminbayu544@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bayustick.com
item3.X-ABLabel:Channel\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const onlyOwn = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!')
}
const onlyPrem = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!')
}
const onlyOp = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴅᴀɴ ᴘʀᴇᴍɪᴜᴍ!')
}
const onlyDaftar = () => {
m.reply('ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀꜰᴛᴀʀ ᴋᴀᴋ ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴅᴀꜰᴛᴀʀ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ!')
}
const onlyOr = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ ᴅᴀɴ ʀᴇꜱᴇʟʟᴇʀ!')
}
const onlyGrup = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ɢʀᴜᴘ ᴄʜᴀᴛ!')
}
const onlyPrivat = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴘʀɪᴠᴀᴛ ᴄʜᴀᴛ!')
}
const onlyAdmin = () => {
m.reply('ꜰɪᴛᴜʀ ᴋʜᴜꜱᴜꜱ ᴀᴅᴍɪɴ!')
}
const onlyBotAdmin = () => {
m.reply('ʙᴏᴛ ʙᴜᴋᴀɴ ᴀᴅᴍɪɴ!')
}

//==========================

switch(command) {
case 'menu': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
bayustick.sendMessage(from, {react: {text: "🗿", key: m.key}})
let teks = `
┏━ ⊑ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 ⊒
┃ 𝐇𝐢 @${m?.sender.split('@')[0]} 👋
┃ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : *${global.botname}*
┃ 𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : *${global.ownername}* 
┃ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : *${runtime(process.uptime())}*
┃ 𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫 : *${Object.values(db.data.users).length} Users*
┃ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐨𝐭 : *Bayu 1.0*
┃ 𝐏𝐫𝐞𝐟𝐢𝐱 :  *No-Prefix*
┃ 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 : *Panel Only*
┗━━━━━━━━━━━━━━`

const buaya = {
title: "List Menu",
sections: [
{
title: `List menu yang sering dipakai`, 
highlight_label: `BayuStick`,
rows: [
{
title: "ALL MENU",
description: "Menampilkan Semua Fitur ☕",
id: `${prefix}allmenu`, 
},
{
title: "UNREGISTER",
description: "Unregistered User",
id: `${prefix}unregis`, 
},
{
title: "INFO SAYA",
description: "Menampilkan Info Mu",
id: `${prefix}infome`, 
},
]},
{
title: `List menu yang dipisahkan`, 
highlight_label: ``,
rows: [
{
title: "MENU CPANEL",
description: "Menampilkan Menu Cpanel",
id: `${prefix}menucpanel`, 
},
{
title: "MENU CPANEL V2",
description: "Menampilkan Menu Cpanel v2",
id: `${prefix}menucpanelv2`, 
},
]},
]};

listbut2(m.chat, teks, buaya, m)
}
break
case 'menucpanel': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
bayustick.sendMessage(from, {react: {text: "🗿", key: m.key}})
let teks = `┏━ ⊑  *MENU CPANEL* ⊒
${garis} ʟɪꜱᴛꜱᴇʀᴠᴇʀ
${garis} ʟɪꜱᴛᴜꜱᴇʀ
${garis} ᴅᴇʟᴜꜱᴇʀ
${garis} ᴅᴇʟꜱᴇʀᴠᴇʀ
${garis} 1ɢʙ
${garis} 2ɢʙ
${garis} 3ɢʙ
${garis} 4ɢʙ
${garis} 5ɢʙ
${garis} 6ɢʙ
${garis} 7ɢʙ
${garis} 8ɢʙ
${garis} 9ɢʙ
${garis} 10ɢʙ
${garis} ᴜɴʟɪ
${bawah}

BayuBot Version 01`
sendbutton(m.chat, teks, m)
}
break
case 'menucpanelv2': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
bayustick.sendMessage(from, {react: {text: "🗿", key: m.key}})
let teks = `┏━ ⊑ *MENU CPANELV2* ⊒
${garis} ʟɪꜱᴛꜱᴇʀᴠᴇʀᴠ2
${garis} ʟɪꜱᴛᴜꜱᴇʀᴠ2
${garis} ᴅᴇʟᴜꜱᴇʀᴠ2
${garis} ᴅᴇʟꜱᴇʀᴠᴇʀᴠ2
${garis} 1ɢʙᴠ2
${garis} 2ɢʙᴠ2
${garis} 3ɢʙᴠ2
${garis} 4ɢʙᴠ2
${garis} 5ɢʙᴠ2
${garis} 6ɢʙᴠ2
${garis} 7ɢʙᴠ2
${garis} 8ɢʙᴠ2
${garis} 9ɢʙᴠ2
${garis} 10ɢʙᴠ2
${garis} ᴜɴʟɪᴠ2
┗━━━━━━━━━━━━━━
BayuBot Version 01`
sendbutton(m.chat, teks, m)
}
break
case 'daftar': {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
let teks = `HALO KAK @${m?.sender.split('@')[0]} SILAHKAN PILIH METODE DAFTAR DI BAWAH INI DENGAN MENGEKLIK BUTTON DI BAWAH INI TEIMAKASIH SUDAH MENGGUKANAN BOT WHATSAPP SAYA 🥰`
const beton = {
title: "DAFTAR",
sections: [
{
title: `Daftar menggunakan email`, 
highlight_label: ``,
rows: [
{
title: "EMAIL",
description: "Metode email v1",
id: `${prefix}emailcara`, 
},
]},
{
title: `Daftar menggunakan captcha`, 
highlight_label: ``,
rows: [
{
title: "CAPTCHA",
description: "Metode daftar v2",
id: `${prefix}regis -captcha`, 
},
]},
{
title: `Daftar secara otomatis`, 
highlight_label: ``,
rows: [
{
title: "OTOMATIS",
description: "Metode daftar v3",
id: `${prefix}regis -auto`, 
},
]},
]};

listbut(m.chat, teks, beton, m)
}
break

case 'regis':
case 'register': {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
if (!text) return m.reply(`*METODE DAFTAR*\n#1: ${prefix+command} -email youremail@gmail.com\n#2: ${prefix+command} -captcha\n#3: ${prefix+command} -auto`)
if (args[0] === "-email" && args[1]) {
const email = args[1];
var otp = await randomNomor(1000, 9999);
db.data.users[m.sender].otp = otp;
db.data.users[m.sender].email = `${email}`
try {
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'nolanverifikasiotp12@gmail.com',
pass: 'wayr mpju coni obwt'
}});
let mailOptions = {
from: 'Bayu',
to: email,
subject: 'Kode Verifikasi OTP',
html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">Kode Verifikasi OTP</h2>
                <p style="text-align: center; font-size: 18px; color: #333;">Kode OTP kamu adalah:</p>
                <div style="text-align: center; font-size: 29px; font-weight: bold; color: #4caf50; margin: 20px 0;">
                    ${otp}
                </div>
                <p style="text-align: center; color: #666; font-size: 15px;">Silakan masukkan kode ini dalam obrolan kamu dengan bot.</p>
                <p style="text-align: center; color: #666; font-size: 15px;">Jika kamu tidak meminta kode ini, abaikan email ini.</p>
                <p style="text-align: center; color: #999; margin-top: 20px; font-size: 14px;">&copy; 2024 bayustick. Seluruh hak cipta dilindungi.</p>
            </div>
        </div>
`};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.log('Error: ' + error);
m.reply('Gagal mengirim kode OTP ke email kamu');
} else {
m.reply('Kode OTP berhasil terkirim ke email kamu');
}});
} catch (err) {
m.reply('Terjadi kesalahan saat mengirim email.');
}} else if (args[0] === "-captcha") {
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
db.data.users[m.sender].email = '-'
try {
const { CaptchaGenerator } = require("captcha-canvas");
const captcha = new CaptchaGenerator()
.setDimension(250, 450) 
.setCaptcha({text: `${angka}`, size: 60, color: "blue"})
.setDecoy({opacity: 0.5})
.setTrace({color: "blue"});
const buffer = captcha.generateSync();
const uploadFile = { upload: bayustick.waUploadToServer };
var imageMessage = await prepareWAMessageMedia(
{
image: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: bayustick.decodeJid(bayustick.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: `\nMasukkan kode verifikasi kamu\nSesuai seperti yang ada digambar...`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `${monospace("CAPTCHA CODE")}`,
subtitle: '',
imageMessage: imageMessage.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: 'Jgn diedit'}],
})})}
}}, { quoted: m })
bayustick.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
} catch (err) {
m.reply('Terjadi kesalahan')
}} else if (args[0] === "-auto") {
const srlnye = createSerial(5)
var angk = await randomNomor(20, 700)
edit2("Mendaftar secara otomatis...", `*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angk}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angk}`
db.data.users[m.sender].email = '-'
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angk}`, srlnye)
}}
break
case 'emailcara': {
let nyo =  `{\"display_text\":\"DAFTAR EMAIL\",\"url\":\"https://wa.me/+${botNumber}?text=regis%20-email%20emailkamu@gmail.com\",\"merchant_url\":\"https://www.google.com\"}`
teks = `SILAHKAN KLIK BUTTON DI BAWAH KAK @${m.sender.split("@")[0]}`
buttonurl(m.chat, teks, nyo, m)
}
break

case 'unregis':
case 'unregister': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} serial\n\nKetik ${prefix}infome untuk cek serial`)
if (args[0] === `${db.data.users[m.sender].serial}`) {
const lastUnregisTime = db.data.users[m.sender].lastUnregisTime || 0;
const currentTime = Date.now();
const sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
if (currentTime - lastUnregisTime < sixHoursInMilliseconds) {
const remainingTime = sixHoursInMilliseconds - (currentTime - lastUnregisTime);
const hours = Math.floor(remainingTime / (60 * 60 * 1000));
const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
return m.reply(`Kamu hanya bisa unregis setiap 6 jam sekali. Coba lagi dalam ${hours} jam dan ${minutes} menit.`);
}
edit2("Menghapus data...", "Sukses menghapus data!")
db.data.users[m.sender].daftar = false
db.data.users[m.sender].nama = `${pushname}`
db.data.users[m.sender].otp = `0`
db.data.users[m.sender].serial = `0`
db.data.users[m.sender].lastUnregisTime = currentTime;
}}
break
//Panel Nyee
case "1gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "2gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "3gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "4gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "6gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "6150"
let cpu = "100"
let disk = "6150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "7gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "7150"
let cpu = "120"
let disk = "7150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "8gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "8150"
let cpu = "140"
let disk = "8150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "9gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "9150"
let cpu = "150"
let disk = "9150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "10gb": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "10150"
let cpu = "190"
let disk = "10150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "unli": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case 'adminpanel': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"admin"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
m.reply(`${monospace("BERHASIL CREATE ADMIN!")}
• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Name: ${username} ${user.last_name}
• Language: ${user.language}
• Admin: ${user.root_admin}
• Created: ${penghitung}

Data lainnya sudah terkirim ke
privat chat...`)
let teksnyo = `*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`

• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Username: ${user.username}
• Password: ${password.toString()}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break
//Cpanelmenu
case 'listserver': {
if (!isOwner && !isPremium) return onlyOp()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await bayustick.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'listuser': {
if (!isOwner && !isPremium) return onlyOp()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Usernya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await bayustick.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'delserver': {
if (!isOwner && !isPremium) return onlyOp()
let srv = args[0]
if (!srv) return m.reply('ID nya mana? Bisa dicek Dengan mengetik listserver')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('_Server tidak ditemukan coba cek id server terlebih dahulu!_')
m.reply('_Sukses menghapus server!_')
}
break
case 'deluser': {
if (!isOwner && !isPremium) return onlyOp()
let usr = args[0]
if (!usr) return m.reply('ID nya mana? Bisa dicek Dengan mengetik listuser')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan coba cek id user terlebih dahulu!_')
m.reply('_Sukses menghapus user!_')
}
break

//CpanelV2
case "1gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break

case "2gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "3gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "4gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "5gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "5150"
let cpu = "90"
let disk = "5150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "6gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "6150"
let cpu = "100"
let disk = "6150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "7gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "7150"
let cpu = "120"
let disk = "7150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "8gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "8150"
let cpu = "140"
let disk = "8150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "9gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "9150"
let cpu = "150"
let disk = "9150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "10gbv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "10150"
let cpu = "190"
let disk = "10150"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case "unliv2": {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isPremium && !isOwner) return m.reply("Khusus Owner Dan Premium Tolol")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let nest = `${global.nest}`
let loc = `${global.locc}`
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
if (!u) return
let d = (await bayustick.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/" + nest + "/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang ${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Hari :* ${penghitung}
┃ *Jam :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 15 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/thumbnail/panel.jpg" } }, { upload: bayustick.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🚮 LINK LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "👤 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 CHAT OWNER","url":"https://wa.me/6283824505310?text=*DONE+BANG+MAKSIH+PANELNYA*","merchant_url":"https://www.google.com"}`
}

],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: wm,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await bayustick.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2?.attributes?.startup || "default_startup_command";

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": wm2,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${penghitung}
┃ *O'clock :* ${wibTime}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`)
}
break
case 'listuserv2': {
if (!isOwner && !isPremium) return onlyOp()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain2 + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Usernya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await bayustick.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'listserverv2': {
if (!isOwner && !isPremium) return onlyOp()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey2
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await bayustick.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'delserverv2': {
if (!isOwner && !isPremium) return onlyOp()
let srv = args[0]
if (!srv) return m.reply('ID nya mana? Bisa dicek Dengan mengetik listserver')
let f = await fetch(domain2 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('_Server tidak ditemukan coba cek id server terlebih dahulu!_')
m.reply('_Sukses menghapus server!_')
}
break
case 'deluserv2': {
if (!isOwner && !isPremium) return onlyOp()
let usr = args[0]
if (!usr) return m.reply('ID nya mana? Bisa dicek Dengan mengetik listuser')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan coba cek id user terlebih dahulu!_')
m.reply('_Sukses menghapus user!_')
}
break

case 'infome': {
let teks = `乂 ${monospace("INFORMASI  AKUN")}
 Nama: ${db.data.users[m.sender].nama}
 Profil: ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
 Status: ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
 Serial: ${db.data.users[m.sender].serial}
 
乂 ${monospace("INFORMASI  DUIT")}
 Saldo: Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
 Limit: ${cekLimit(m.sender, db_limit)} limit`
let bud = `{\"display_text\":\"COPY SERIAL\",\"id\":\"P\",\"copy_code\":\"${db.data.users[m.sender].serial}\"}`;
buttoncopy(m.chat, teks, bud, m)
}
break
case 'runtime': {
if (!isOwner) return onlyOwn()
const old = performance.now()
const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const runtimes = `
*🔴 INFORMASI RUNTIME BOT BAYU*

🖥 CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
🕡 Uptime : *${Math.floor(os.uptime() / 86400)} days*
🕡 Runtime : *${runtime(process.uptime())}*
💾 Ram : *${free_ram}/${ram}*
⚡ Speed : *${(performance.now() - old).toFixed(5)} ms*
`
await bayustick.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(runtimes),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'runtime2': {
if (!isOwner) return onlyOwn()
m.reply(`Bot runtime: ${runtime(process.uptime())}`)
}
break
case 'addsaldo': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addSaldo(trgt, parseInt(args[1]), db_saldo)
m.reply(`*SUKSED ADD SALDO*
Nama: ${pushname}
Nomor: ${args[0]}
Saldo: Rp. ${toRupiah(args[1])} `)
}
break
case 'addlimit': {
if (!db.data.users[m.sender].daftar) return onlyDaftar()
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
let tr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addLimit(tr, parseInt(args[1]), db_limit)
m.reply(`*SUKSED ADD LIMIT*
Nama: ${pushname}
Nomor: ${args[0]}
Limit: ${args[1]} `)
}
break
default:

if ((budy) && [`${db.data.users[m.sender].otp}`].includes(budy) && !m.fromMe) {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
const srlnye = createSerial(5)
var angka = await randomNomor(20, 700)
m.reply(`*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angka}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angka}`
db.data.users[m.sender].otp = `${db.data.users[m.sender].otp}`
db.data.users[m.sender].email = `${db.data.users[m.sender].email}`
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angka}`, srlnye)
}

if (budy.startsWith('=> ')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}}

if (budy.startsWith('> ')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}}
}

if (budy.startsWith('$ ')) {
if (!isOwner) return 
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})}
}

catch (err) {
console.log(util.format(err))
let e = String(err)
bayustick.sendMessage("6283824505310@s.whatsapp.net", {text: "Hi developer, tolong perbaiki beberapa ini\n\n" + util.format(err)})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})