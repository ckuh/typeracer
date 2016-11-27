import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getWords, updateWords, setUserInput } from '../actions/words'

// components
import WordSection from './WordSection'

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

    if (e.which === 32 && words.userInput.length) {
      words.userWords.push(words.userInput)
      this.props.updateWords({userWords: words.userWords, userInput: '', curWordPos: words.curWordPos + 1})
    }
  }

  setDisplaySection () {
    return this.props.words.wordsList.length ? (<div><div style={{border: '1px solid black', borderRadius: '3px', fontSize: '2.2em', height: '154px', padding: '6px 12px', overflow: 'hidden'}}><WordSection /></div><input value={this.props.words.userInput} onChange={this.userInput} onKeyPress={this.updateInput} /></div>) : ''
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
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
  setUserInput: func
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, { getWords, updateWords, setUserInput })(Home)
