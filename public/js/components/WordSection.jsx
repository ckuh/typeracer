import React, { Component } from 'react'

import { connect } from 'react-redux'

class WordSection extends Component {
  setWordList () {
    const words = this.props.words
    return words.wordsList.length ? words.wordsList.map((word, key) => {
      if (words.curWordPos === key) {
        if (word.slice(0, words.userInput.length).includes(words.userInput)) {
          return (<div key={key} style={{display: 'inline-block', padding: '3px 5px 3px 5px', backgroundColor: '#ddd', borderRadius: '3px'}}>
            {word}
          </div>)
        } else {
          return (<div key={key} style={{display: 'inline-block', padding: '3px 5px 3px 5px', backgroundColor: 'red', borderRadius: '3px'}}>
            {word}
          </div>)
        }
      } else {
        return (<div key={key} style={{display: 'inline-block', padding: '3px 5px 3px 5px'}}>
          {word}
        </div>)
      }
    }) : []
  }

  render () {
    return (
      <div style={{fontSize: '1.6em'}}>
        {this.setWordList()}
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
