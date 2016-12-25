import React, { Component } from 'react'
import { connect } from 'react-redux'

class WPMData extends Component {
  render () {
    return (
      <div>
        <h4 style={{margin: '0'}}>Results</h4>
        <div>
          wpm: {this.props.words.wpmCount}
        </div>
        <div>
          keystrokes: {this.props.words.userWords.join(' ').length} (<span style={{color: 'green'}}>{this.props.words.userWords.join(' ').length - this.props.words.totalUncorrectedErr}</span> | <span style={{color: 'red'}}>{this.props.words.totalUncorrectedErr}</span>)
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
