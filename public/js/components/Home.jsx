import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getWords, updateWords, setUserInput } from '../actions/words'
import { startClock } from '../actions/timer'

// components
import WordSection from './WordSection'
import Timer from './Timer'

class Home extends Component {
  constructor (props) {
    super(props)

    this.userInput = this.userInput.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  componentWillMount () {
    this.props.getWords()
  }

  userInput (e) {
    if (e.target.value !== ' ') {
      this.props.setUserInput(e.target.value)
    }
  }

  updateInput (e) {
    const words = this.props.words

    if (e.which !== 32) {
      this.props.startClock()
    }

    if (e.which === 32 && words.userInput.length) {
      words.userWords.push(words.userInput)
      this.props.updateWords({userWords: words.userWords, userInput: '', curWordPos: words.curWordPos + 1})
    }
  }

  setDisplaySection () {
    const wordSectionContainer = {border: '1px solid black', borderRadius: '3px', fontSize: '2.2em', height: '166px', padding: '6px 12px', overflow: 'hidden', width: '80%', margin: '0 auto 25px auto', boxSizing: 'border-box'}
    const wordSectionInput = {width: '100%', lineHeight: '1em', fontSize: '2em', padding: '6px 12px', boxSizing: 'border-box', outline: 'none'}
    return this.props.words.wordsList.length ? (
      <div>
        <div style={wordSectionContainer}>
          <WordSection />
        </div>
        <div style={{width: '80%', margin: '0 auto', backgroundColor: '#a7c8e7', boxSizing: 'border-box', padding: '6px', borderRadius: '3px'}}>
          <div style={{width: '60%', margin: '0 auto'}}>
            <div style={{marginRight: '130px'}}>
              <input
                style={wordSectionInput}
                value={this.props.words.userInput}
                onChange={this.userInput}
                onKeyPress={this.updateInput} />
            </div>
            <div style={{float: 'right', marginTop: '-53px', width: '120px'}}>
              <Timer secondsRemaining='60' />
            </div>
          </div>
        </div>
      </div>
    ) : ''
  }

  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Typing Test</h1>
        {this.setDisplaySection()}
        <pre><code>{JSON.stringify({userInput: this.props.words.userInput, userWords: this.props.words.userWords}, null, 4)}</code></pre>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Home.propTypes = {
  words: object,
  getWords: func,
  userInput: func,
  updateWords: func,
  setUserInput: func,
  timer: object,
  startClock: func
}

const mapStateToProps = (state) => ({ words: state.words, timer: state.timer })
export default connect(mapStateToProps, { getWords, updateWords, setUserInput, startClock })(Home)
