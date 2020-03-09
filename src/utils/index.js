import { UP_ARROW, DOWN_ARROW, TWO_ARROWS, WEEK } from '../constants'

const faker = require('faker')

faker.seed(123)

const makeFackeString = x => {
  return {
    id: x + 1,
    rank: faker.random.number(19) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: {
      city: faker.address.city(),
      street: faker.address.streetAddress(),
    },
    day: Object.values(WEEK)[faker.random.number(6)],
    isActive: faker.random.boolean(),
  }
}

export const makeData = () =>
  [...new Array(500)].map((_, index) => makeFackeString(index))

export const getArrow = rank => {
  if (!rank) return TWO_ARROWS
  if (rank === 'inc') return UP_ARROW
  return DOWN_ARROW
}
