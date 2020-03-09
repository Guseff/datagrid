import { UP_ARROW, DOWN_ARROW, TWO_ARROWS } from '../constants'

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

export const makeData = () =>
  [...new Array(500)].map((_, index) => makeFackeString(index))

export const getArrow = rank => {
  if (!rank) return TWO_ARROWS
  if (rank === 'inc') return UP_ARROW
  return DOWN_ARROW
}
