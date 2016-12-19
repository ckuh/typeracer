import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import ChartInfo from './ChartInfo'

class WordPerMinInfo extends Component {
  render () {
    return (
      <div style={WPMIContainer}>
        <ChartInfo />
      </div>
    )
  }
}

const { object } = React.PropTypes

WordPerMinInfo.propTypes = {
  words: object
}

const WPMIContainer = {border: '1px solid black', borderRadius: '3px', fontSize: '2.2em', padding: '6px 12px', overflow: 'hidden', width: '80%', margin: '25px auto 0 auto', boxSizing: 'border-box'}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, { })(WordPerMinInfo)
