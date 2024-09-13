const fs = require('fs')
const crypto = require('crypto')

const _users = JSON.parse(fs.readFileSync('./data/users.json'))

const getRegisteredRandomId = () => {
    return _users[Math.floor(Math.random() * _users.length)].id
}

const addRegisteredUser = (userid, name, serials) => {
    const obj = { id: userid, name: name, serial: serials }
    _users.push(obj)
    fs.writeFileSync('./data/users.json', JSON.stringify(_users))
}

const checkRegisteredUser = (userid) => {
    let status = false
    Object.keys(_users).forEach((i) => {
        if (_users[i].id === userid) {
            status = true
        }
    })
    return status
}

const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

module.exports = {
	getRegisteredRandomId,
	addRegisteredUser,
	checkRegisteredUser,
	createSerial
}