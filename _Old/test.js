const ts2gas = require('ts2gas');
const fs = require('fs')

// console.log(ts2gas("fds"))
try {
    const data = fs.readFileSync('./_Old/lol.ts', 'utf8')
    console.log(ts2gas(data))
} catch (err) {
    console.error(err)
}
