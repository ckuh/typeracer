import React, { Component } from 'react'
import { connect } from 'react-redux'

class WPMData extends Component {
  render () {
    return (
      <div>
        <h4 style={{margin: '0'}}>Result</h4>
        <div>
          <span style={{color: 'green'}}>
            {this.props.words.wpmCount} WPM
          </span>
        </div>
        <div>
          Keystrokes: (<span style={{color: 'green'}}>{this.props.words.userWords.join(' ').length - this.props.words.totalUncorrectedErr}</span> | <span style={{color: 'red'}}>{this.props.words.totalUncorrectedErr}</span>) {this.props.words.userWords.join(' ').length}
        </div>
        <div>
          Correct words: <span style={{color: 'green'}}>{Math.ceil(this.props.words.userWords.join(' ').length / 5)}</span>
        </div>
        <div>
          Wrong words: <span style={{color: 'red'}}>{Math.ceil(this.props.words.totalUncorrectedErr / 5)}</span>
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
