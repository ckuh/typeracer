import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getWords } from '../actions/words'

// components
import WordSection from './WordSection'

class Home extends Component {
  componentWillMount () {
    this.props.getWords()
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          <WordSection />
        </div>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Home.propTypes = {
  words: object,
  getWords: func
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, { getWords })(Home)
