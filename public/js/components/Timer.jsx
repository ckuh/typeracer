import React, { Component } from 'react'

import { connect } from 'react-redux'

// components
import { Circle } from 'rc-progress'

// actions
import { updateTimer, finishedTest } from '../actions/timer'
import { updateWPM } from '../actions/words'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      secondsRemaining: 0,
      timePercent: 100,
      timerCss: {
        height: '53px',
        width: '53px',
        lineHeight: '53px',
        fontSize: '2em',
        textAlign: 'center'
      }
    }

    this.tick = this.tick.bind(this)
  }

  tick () {
    if (this.props.timer.startClock) {
      this.setState({secondsRemaining: this.state.secondsRemaining - 1})
      this.props.updateTimer(this.state.secondsRemaining)
      this.props.updateWPM(this.props.words, this.props.timer.timer)

      if (this.state.timePercent !== 0) {
        this.setState({timePercent: Math.floor(((this.state.secondsRemaining) / 60) * 100)})
      }
      if (this.state.secondsRemaining <= 0) {
        clearInterval(this.interval)
        this.props.finishedTest()
      }
    }
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
    this.setState({secondsRemaining: this.props.secondsRemaining})
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div style={this.state.timerCss}>
        <div style={{position: 'absolute', width: '53px'}}>
          {this.state.secondsRemaining}
        </div>
        <Circle percent={this.state.timePercent} strokeWidth='10' strokeColor={makeColor(this.state.timePercent / 100)} />
      </div>
    )
  }
}

const { string, object, func } = React.PropTypes

Timer.propTypes = {
  secondsRemaining: string,
  timer: object,
  updateTimer: func,
  updateWPM: func,
  finishedTest: func,
  words: object
}

const mapStateToProps = (state) => ({ timer: state.timer })
export default connect(mapStateToProps, { updateTimer, updateWPM, finishedTest })(Timer)

const intToHex = (i) => {
  var hex = parseInt(i, 10).toString(16)
  return (hex.length < 2) ? '0' + hex : hex
}

const makeColor = (value) => {
  // value must be between [0, 510]
  value = Math.min(Math.max(0, value), 1) * 510

  var redValue
  var greenValue
  if (value < 255) {
    redValue = 255
    greenValue = Math.sqrt(value) * 16
    greenValue = Math.round(greenValue)
  } else {
    greenValue = 255
    value = value - 255
    redValue = 255 - (value * value / 255)
    redValue = Math.round(redValue)
  }

  return '#' + intToHex(redValue) + intToHex(greenValue) + '00'
}
