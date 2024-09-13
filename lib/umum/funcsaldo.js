const fs = require('fs');

const koinPerak = {};

const tambahKoinPerak = (userId) => {
  if (koinPerak[userId]) {
    koinPerak[userId] += 1;
  } else {
    koinPerak[userId] = 1;
  }
};

const cekKoinPerak = (userId) => {
  return koinPerak[userId] || 0;
};

const addSaldo = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].saldo += amount
fs.writeFileSync('./data/saldo.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
saldo: amount
})
_dir.push(object_add)
fs.writeFileSync('./data/saldo.json', JSON.stringify(_dir, null, 3))
}
}

const minSaldo = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].saldo -= amount
fs.writeFileSync('./data/saldo.json', JSON.stringify(_dir, null, 3))
}}

const cekSaldo = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].saldo
} else {
return 0
}}

module.exports = { addSaldo, minSaldo, cekSaldo }