import { WEEK } from '../constants'

const faker = require('faker')

faker.seed(123)

const makeFakeString = x => {
  return {
    id: x + 1,
    rank: faker.random.number(19) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    day: Object.values(WEEK)[ faker.random.number(6)],
    isActive: faker.random.boolean(),
  }
}

const makeData = () =>
  [...new Array(500)].map((_, index) => makeFakeString(index))

export default makeData
