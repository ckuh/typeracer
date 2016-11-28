import { combineReducers } from 'redux'

// reducers
import words from './words'
import timer from './timer'

export default combineReducers({
  words,
  timer
})
