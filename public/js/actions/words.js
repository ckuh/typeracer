import axios from 'axios'

export function getWords () {
  return dispatch => {
    dispatch({type: 'FETCH_WORDS'})
    axios.get(
      '/words',
      {
        params: {
          test: 'hard'
        }
      }
    )
    .then(resp => dispatch({type: 'FETCH_WORDS_FULFILLED', payload: resp.data}))
    .catch(err => dispatch({type: 'FETCH_WORDS_FULFILLED', payload: err}))
  }
}

export function updateWords (words) {
  return dispatch => {
    let uncorrectCount = words.uncorrectCount
    let correctCount = words.correctCount
    if (words.uncorrectedErr > 0) { uncorrectCount++ }
    if (words.uncorrectedErr === 0) { correctCount++ }
    dispatch({type: 'UPDATE_WORDS', payload: {userWords: words.userWords, userInput: words.userInput, curWordPos: words.curWordPos, totalUncorrectedErr: words.totalUncorrectedErr + words.uncorrectedErr, uncorrectedErr: 0, uncorrectCount, correctCount}})
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

    let allTypedEntries = Math.ceil(((words.userWords.join(' ').length / 5) - (words.totalUncorrectedErr / 5)) / (curTime / 60))

    let accuracy = Math.ceil(((words.userWords.join(' ').length - words.totalUncorrectedErr) / words.userWords.join(' ').length) * 100) || 0

    if (allTypedEntries < 0) {
      allTypedEntries = 0
    }

    if (curTime % 3 === 0) {
      words.wpmList.push({x: curTime, y: allTypedEntries})
    }

    dispatch({type: 'UPDATE_WPM', payload: {wpmCount: allTypedEntries, accuracy}})
  }
}

export function updateUncorrectedErr (str1, str2) {
  const errCount = (str1, str2) => {
    let count = 0
    str2.split('').forEach((letter, i) => {
      if (!str1[i] || str1[i] !== letter) { count++ }
    })
    if (str1.length > str2.length) {
      count += str1.length - str2.length
    }
    return count
  }

  return dispatch => {
    const uncorrectedErr = errCount(str1, str2)

    dispatch({type: 'UPDATE_UNCORRECTED_ERR', payload: uncorrectedErr})
  }
}
