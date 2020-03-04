const facker = require('faker')

facker.seed(123)

const makeFackeString = x => {
  return {
    id: 122 + x,
    rank: facker.random.number(20),
    name: facker.name.firstName(),
    email: facker.internet.email(),
    avatar: facker.image.avatar(),
    city: facker.address.city(),
    address: facker.address.streetAddress(),
    isActive: facker.random.boolean(),
  }
}

const makeData = [...new Array(50)].map((_, index) => makeFackeString(index))

export default makeData
