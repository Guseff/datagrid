const facker = require('faker')

facker.seed(123)

const makeFackeString = x => {
  return {
    id: x + 1,
    rank: facker.random.number(19) + 1,
    name: facker.name.firstName(),
    email: facker.internet.email(),
    avatar: facker.image.avatar(),
    city: facker.address.city(),
    address: facker.address.streetAddress(),
    isActive: facker.random.boolean(),
  }
}

const makeData = () =>
  [...new Array(150)].map((_, index) => makeFackeString(index))

export default makeData
