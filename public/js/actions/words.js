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
