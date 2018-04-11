import * as types from '../constants/counterTypes'

const initialState = {
  count: 0,
  user: null,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    // break
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    // break
    case types.RESETDATA:
      return {
        ...state,
        count: 0,
      }
    // break
    default:
      return state
  }
}
