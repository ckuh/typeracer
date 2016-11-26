export default (state = {
  wordsList: [],
  fetching: false,
  fetched: false,
  error: false
}, action) => {
  switch (action.type) {
    case 'FETCH_WORDS': {
      return { ...state, fetching: true }
    }
    case 'FETCH_WORDS_REJECTED': {
      return { ...state, fetched: false, error: action.payload }
    }
    case 'FETCH_WORDS_FULFILLED': {
      return { ...state, fetched: true, wordsList: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}