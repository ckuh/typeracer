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

export function updateWords (words) {
  return dispatch => {
    dispatch({type: 'UPDATE_WORDS', payload: {userWords: words.userWords, userInput: words.userInput, curWordPos: words.curWordPos, totalUncorrectedErr: words.totalUncorrectedErr + words.uncorrectedErr, uncorrectedErr: 0}})
  }
}

export function setUserInput (userInput) {
  return dispatch => {
    dispatch({type: 'SET_USER_INPUT', payload: userInput})
  }
}

export function updateWPM (words, time) {
  return dispatch => {
    let curTime = 60 - time || 1

    let allTypedEntries = Math.floor(((words.userWords.join(' ').length / 5) - words.totalUncorrectedErr) / (curTime/60))

    if (allTypedEntries < 0) {
      allTypedEntries = 0
    }

    dispatch({type: 'UPDATE_WPM', payload: {wpmCount: allTypedEntries}})
  }
}

export function updateUncorrectedErr (words) {
  return dispatch => {
    const uncorrectedErr = editDistance(words.userInput, words.wordsList[words.curWordPos]) - 1

    dispatch({type: 'UPDATE_UNCORRECTED_ERR', payload: uncorrectedErr})
  }
}

const editDistance = (str1, str2) => {
  let m = str1.length, n = str2.length, lookup = Array(m)
  for (let i = 0; i <= m; i++) {
    lookup[i] = Array(n)
    for (let j = 0; j <= n; j++) {
      if (i === 0) lookup[i][j] = j
      else if (j === 0) lookup[i][j] = i
      else if (str1[i-1] === str2[j-1]) lookup[i][j] = lookup[i-1][j-1]
      else lookup[i][j] = 1 + Math.min(lookup[i][j-1], lookup[i-1][j], lookup[i-1][j-1])
    }
  }
  return lookup[m][n]
}
