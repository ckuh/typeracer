export function startClock () {
  return dispatch => {
    dispatch({type: 'START_CLOCK'})
  }
}

export function updateTimer (timer) {
  return dispatch => {
    dispatch({type: 'UPDATE_CLOCK', payload: {timer}})
  }
}

export function finishedTest () {
  return dispatch => {
    dispatch({type: 'FINSHED_TEST'})
  }
}
