const fs = require("fs")

fs.writeFileSync('sync.txt', 'This is fs.writeFileSync func!\n')

fs.appendFileSync('sync.txt', 'This is fs.appendFileSync func!')
