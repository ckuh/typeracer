import React, { Component } from 'react'

import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, {})(Home)
