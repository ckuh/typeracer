import axios from 'axios'

export function getWords () {
  return dispatch => {
    dispatch({type: 'FETCH_WORDS'})
    axios.get(
      '/words'
    )
    .then(resp => dispatch({type: 'FETCH_WORDS_FULFILLED', payload: resp.data}))
    .catch(err => dispatch({type: 'FETCH_WORDS_FULFILLED', payload: err}))
  }
}

export function updateWords (userWords) {
  return dispatch => {
    dispatch({type: 'UPDATE_WORDS', payload: {userWords: userWords, userInput: ''}})
  }
}

export function setUserInput (userInput) {
  return dispatch => {
    dispatch({type: 'SET_USER_INPUT', payload: userInput})
  }
}
