export default (state = {
  curWordPos: 0,
  userInput: '',
  userWords: [],
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
    case 'UPDATE_WORDS': {
      return { ...state, userWords: action.payload.userWords, userInput: action.payload.userInput, curWordPos: action.payload.curWordPos }
    }
    case 'SET_USER_INPUT': {
      return { ...state, userInput: action.payload }
    }
    default: {
      return { ...state }
    }
  }
}
