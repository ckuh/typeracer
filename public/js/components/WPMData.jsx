import React, { Component } from 'react'
import { connect } from 'react-redux'

class WPMData extends Component {
  render () {
    return (
      <div>
        <h4 style={{margin: '0'}}>Result</h4>
        <div>
          {this.props.words.wpmCount} WPM
        </div>
        <div>
          Keystrokes: {this.props.words.userWords.join(' ').length} (<span style={{color: 'green'}}>{this.props.words.userWords.join(' ').length - this.props.words.totalUncorrectedErr}</span> | <span style={{color: 'red'}}>{this.props.words.totalUncorrectedErr}</span>)
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

WPMData.propTypes = {
  words: object
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, {})(WPMData)
