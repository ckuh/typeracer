export default (state = {
  startClock: false
}, action) => {
  switch (action.type) {
    case 'START_CLOCK': {
      return { ...state, startClock: true }
    }
    default: {
      return { ...state }
    }
  }
}
