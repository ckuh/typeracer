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
        <table style={{margin: '0 auto'}}>
          <tbody>
            <tr>
              <td style={left}>Keystrokes: </td>
              <td style={right}>
                (<span style={{color: 'green'}}>{this.props.words.userWords.join(' ').length - this.props.words.totalUncorrectedErr}</span> | <span style={{color: 'red'}}>{this.props.words.totalUncorrectedErr}</span>) {this.props.words.userWords.join(' ').length}
              </td>
            </tr>
            <tr>
              <td style={left}>Correct words: </td>
              <td style={right}>
                {/* <span style={{color: 'green'}}>{Math.ceil(this.props.words.userWords.join(' ').length / 5)}</span> */}
                <span style={{color: 'green'}}>{this.props.words.correctCount}</span>
              </td>
            </tr>
            <tr>
              <td style={left}>Wrong words: </td>
              <td style={right}>
                {/* <span style={{color: 'red'}}>{Math.ceil(this.props.words.totalUncorrectedErr / 5)}</span> */}
                <span style={{color: 'red'}}>{this.props.words.uncorrectCount}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const left = {textAlign: 'left'}
const right = {textAlign: 'right'}
const { object } = React.PropTypes

WPMData.propTypes = {
  words: object
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, {})(WPMData)
