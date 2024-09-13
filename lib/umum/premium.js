const fs = require('fs')
const toMs = require('ms')

/**
 * Add premium user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addPremiumUser = (userId, expired, _dir) => {
    if (expired === undefined) {
        expired = 'Permanen'
    } else {
        expired = expired
    }
    
    let expired_at = 'Permanen'
    
    if (expired === 'Permanen') {
        expired_at = 'Permanen'
    } else {
        expired_at = Date.now() + toMs(expired)
    }

    const obj = { id: userId, expired: expired_at }
    _dir.push(obj)
    fs.writeFileSync('./data/premium.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get premium user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get premium user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkPremiumUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking premium.
 * @param {Object} _dir 
 */
const expiredCheck = (nolan, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Premium expired: ${_dir[position].id}`)
            let txt = `Premium expired, terimakasih sudah berlangganan`
            nolan.sendMessage(_dir[position].id, { text: txt })
            _dir.splice(position, 1)
            fs.writeFileSync('./data/premium.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
}
