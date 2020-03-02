const facker = require('faker')

facker.seed(123)

const data = new Array(10).fill(0).map(() => facker.helpers.createTransaction())

console.log(JSON.stringify(data))
