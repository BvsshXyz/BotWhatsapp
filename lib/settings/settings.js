/*
No Enc? Buy : 6283150032857
// Harga : 65K
// Script By : BayuStick()

[ NOTE ]
- jangan dijual kontol
- bantu share biar ga dijual 
- jangan hapus hapus/ganti link sumber ya anjing ( batu = viral dan menghitan ) 

[ SHARED BY ]
- https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24
*/
const fs = require('fs')

global.storename = "*BAYU - STORE*" // Terserah
global.botname = "*BayuGekk*" //terserah
global.ownername = "BayuGekk" // Terserah
global.owner = "6283824505310" //no owner
global.versisc = "VERSION 1.0" //terserah

global.packname = "-"
global.author = "Sticker By"
global.web = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24" // Terserah
global.wm = "BayuSlebew Version 3.0.0" //Gusah Diganti
global.wm2 = "PANEL BY BAYU GANTENG, YG DELETE YATIM" //Gak Ush Ganti
global.chjid = "120363315844427855" // isi id channel

global.sessionName = "session"
global.prefix = ""
global.botNumber = "6283150032857" 
global.nomorbot2 = "6283150032857"

global.sch = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24"
global.sgc = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24"
global.stg = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24"
global.syt = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24"
global.sig = "https://whatsapp.com/channel/0029VakNome9RZAZzbyIqt24"
global.thumb = "https://telegra.ph/file/e2148d22cabbfec9cf6a6.jpg"

global.qris = "https://telegra.ph/file/e2148d22cabbfec9cf6a6.jpg"
global.dana = "083151224599"
global.gopay = "083151224599"
global.ovo = "083151224599"
global.pulsa = "083824505310"
global.rek = "Belom Ada Rekening"

global.ig = "bayy_qx"
global.yt = "GAK PUNYA YT"
global.tt = "frezzx.80"
global.github = "BayuuVpn"

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = "┏━━━━━━━━━━━━━━━━"
global.kiri = "┏━ ⊑"
global.kanan ="⊒"
global.tengah = "┣━━━━━━━━━━━━━━━━"
global.bawah = "┗━━━━━━━━━━━━━━━━"
global.garis = "┃"

// Apikey nya
global.gtds = "GataDios" //Isi Apikey Kalian
global.xyro = "5dRkJDWvIG" //Isi Apikey Kalian
global.nlkey = "AdpStore" //Isi Apikey Kalian
global.skizapi = "SanTampan" //Isi Apikey Kalian
global.neoxrapi = "sanolan" //Isi Apikey Kalian

// Buat cpanel
global.domain = "" //Isi Domain Panel Kalian
global.apikey = "" //Isi Apikey PLTA Kalian
global.capikey = "" ///Isi Apikey PLTC Kalian
global.eggs = "15" //Sesuain Sama Nomor Egg Kalian
global.locc = "1" //Sesuain Sama Nomor Location Kalian
global.nest = "5" ////Sesuain Sama Nomor nest Kalian
global.apido = "Api digital ocean" //Isi Apikey Digtal Ocean

//Cpanelv2 
global.domain2 = ""
global.apikey2 = ""
global.capikey2 = ""

global.autotyping = false
global.autoread = true
global.autobio = true
global.anticall = true
global.antispam = true
global.antibot = false
global.welcome = true // welcome+left

global.gamewaktu = 60
global.limit = 15

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

// NOTE
// true aktif & false nonaktif

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
