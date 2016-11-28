import React, { Component } from 'react'

import { connect } from 'react-redux'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      secondsRemaining: 0
    }

    this.tick = this.tick.bind(this)
  }

  tick () {
    if (this.props.timer.startClock) {
      this.setState({secondsRemaining: this.state.secondsRemaining - 1})
      if (this.state.secondsRemaining <= 0) {
        clearInterval(this.interval)
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
      <div style={{}}>
        {this.state.secondsRemaining}
      </div>
    )
  }
}

const { string, object } = React.PropTypes

Timer.propTypes = {
  secondsRemaining: string,
  timer: object
}

const mapStateToProps = (state) => ({ timer: state.timer })
export default connect(mapStateToProps, {})(Timer)
