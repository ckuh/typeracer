export default (state = {
  startClock: false,
  timer: 60
}, action) => {
  switch (action.type) {
    case 'START_CLOCK': {
      return { ...state, startClock: true }
    }
    case 'UPDATE_CLOCK': {
      return { ...state, timer: action.payload.timer }
    }
    default: {
      return { ...state }
    }
  }
}
