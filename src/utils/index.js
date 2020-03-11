import { UP_ARROW, DOWN_ARROW, TWO_ARROWS, DAYS } from '../constants'

const faker = require('faker')

faker.seed(123)

const makeFakeString = x => {
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
    day: DAYS[faker.random.number(6)],
    isActive: faker.random.boolean(),
  }
}

export const makeData = () =>
  [...new Array(1500)].map((_, index) => makeFakeString(index))

export const getArrow = rank => {
  if (!rank) return TWO_ARROWS
  if (rank === 'inc') return UP_ARROW
  return DOWN_ARROW
}

export const deleteElementFromArray = (arr, el) => {
  if (!arr.includes(el)) return [...arr]
  const res = [...arr]
  res.splice(res.indexOf(el), 1)
  return res
}

export const deleteElementFromArrayByID = (array, IDs) => {
  let res = [...array]
  IDs.forEach(id => {
    const elem = res.find(x => x.id.toString() === id)
    res = deleteElementFromArray(res, elem)
  })
  return res
}
