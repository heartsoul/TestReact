import { combineReducers } from 'redux'
import loginIn from './loginReducer'
import counter from './counterReducer'

const rootReducer = combineReducers({
  loginIn,
  counter,
})

export default rootReducer
