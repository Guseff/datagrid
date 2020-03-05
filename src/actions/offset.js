import { PUT_OFFSET } from '../constants'

const putOffset = offset => {
  return {
    type: PUT_OFFSET,
    payload: offset,
  }
}

export default putOffset
