export function startClock () {
  return dispatch => {
    dispatch({type: 'START_CLOCK'})
  }
}
