export default (state = {
  curWordPos: 0,
  accuracy: 0,
  userInput: '',
  userWords: [],
  wordsList: [],
  wpmList: [{x: 0, y: 0}],
  wpmCount: 0,
  uncorrectedErr: 0,
  totalUncorrectedErr: 0,
  fetching: false,
  fetched: false,
  error: false,
  finished: false
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
      return { ...state, userWords: action.payload.userWords, userInput: action.payload.userInput, curWordPos: action.payload.curWordPos, totalUncorrectedErr: action.payload.totalUncorrectedErr, uncorrectedErr: action.payload.uncorrectedErr }
    }
    case 'SET_USER_INPUT': {
      return { ...state, userInput: action.payload }
    }
    case 'UPDATE_WPM': {
      return { ...state, wpmCount: action.payload.wpmCount, accuracy: action.payload.accuracy }
    }
    case 'UPDATE_UNCORRECTED_ERR': {
      return { ...state, uncorrectedErr: action.payload }
    }
    case 'FINSHED_TEST': {
      return { ...state, finished: true }
    }
    default: {
      return { ...state }
    }
  }
}
