const spin = require("spinnies")

const spinner = { 
"interval": 800,
"frames": [
">",
"<",
">",
"<",
">",
"<", 
">", 
"<",
">"
]}

let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
if (!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
spins.add(id, {text: text})
}

const info = (id, text) => {
spins.update(id, {text: text})
}

const success = (id, text) => {
spins.succeed(id, {text: text})
}

const close = (id, text) => {
spins.fail(id, {text: text})
}

module.exports = { spinner, getGlobalSpinner, start, info, success, close }