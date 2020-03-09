import { UP_ARROW, DOWN_ARROW } from '../constants'

const getArrow = rank => {
  if (!rank) return ''
  if (rank === 'inc') return UP_ARROW
  return DOWN_ARROW
}

export default getArrow