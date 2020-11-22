const validator = require('validator') // Can be called after npm install validator
const tambah = require('./ownModule.js')

console.log(`2 + 3 = ${tambah(2,3)}`)
console.log(validator.isEmail('hasbi@example.com'))
