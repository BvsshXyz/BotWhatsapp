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

const addLimit = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].limit += amount
fs.writeFileSync('./data/limit.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
limit: amount
})
_dir.push(object_add)
fs.writeFileSync('./data/limit.json', JSON.stringify(_dir, null, 3))
}
}

const minLimit = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].limit -= amount
fs.writeFileSync('./data/limit.json', JSON.stringify(_dir, null, 3))
}}

const cekLimit = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].limit
} else {
return 0
}}

module.exports = { addLimit, minLimit, cekLimit }