import React, { Component } from 'react'

import { connect } from 'react-redux'

class WordSection extends Component {
  constructor (props) {
    super(props)

    this.state = {
      styles: {
        position: 'relative',
        top: 0
      }
    }

    this.reload = true
  }
  setWordList () {
    const words = this.props.words
    return words.wordsList.length ? words.wordsList.map((word, key) => {
      if (words.curWordPos === key) {
        if (word.slice(0, words.userInput.length).includes(words.userInput)) {
          return (<div key={key} id='curWord' style={{display: 'inline-block'}}><span style={{float: 'left', padding: '3px 5px', backgroundColor: '#ddd', borderRadius: '3px'}}>
            {word}
          </span></div>)
        } else {
          return (<div key={key} id='curWord' style={{display: 'inline-block'}}><span style={{float: 'left', padding: '3px 5px', backgroundColor: 'red', borderRadius: '3px'}}>
            {word}
          </span></div>)
        }
      } else {
        if (words.userWords[key] !== undefined) {
          return words.userWords[key] === word ? (<div key={key} style={{display: 'inline-block'}}><span style={{float: 'left', padding: '3px 5px', color: 'green'}}>
            {word}
          </span></div>) : (<div key={key} style={{display: 'inline-block'}}><span style={{float: 'left', padding: '3px 5px', color: 'red'}}>
            {word}
          </span></div>)
        } else {
          return (<div key={key} style={{display: 'inline-block'}}><span style={{float: 'left', padding: '3px 5px'}}>
            {word}
          </span></div>)
        }
      }
    }) : []
  }

  setWordListPos () {
    const words = this.props.words
    if (words.curWordPos) {
      const pos = document.getElementById('curWord').offsetLeft
      if (pos === 21 || pos === 0) {
        if (this.reload) {
          this.setState({styles: {
            position: 'relative',
            top: `${parseInt(this.state.styles.top, 10) - 55}px`
          }})
          this.reload = false
        }
      } else {
        this.reload = true
      }
    }
  }

  componentDidUpdate () {
    this.setWordListPos()
  }

  render () {
    return (
      <div style={this.state.styles}>
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
