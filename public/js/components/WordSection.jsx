import React, { Component } from 'react'

import { connect } from 'react-redux'

class WordSection extends Component {

  render () {
    let wordList = this.props.words.wordsList.length ? this.props.words.wordsList.map((word, key) => (
      <div key={key} style={{display: 'inline-block', padding: '3px 5px 3px 5px'}}>
        <strong>{word}</strong>
      </div>
    )) : []

    return (
      <div>
        {wordList}
      </div>
    )
  }
}

const { object } = React.PropTypes

WordSection.propTypes = {
  words: object
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, {})(WordSection)
