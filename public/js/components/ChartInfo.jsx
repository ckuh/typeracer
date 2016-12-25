import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'chart.js'

class ChartInfo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      myChart: {}
    }
  }

  componentDidMount () {
    this.setupChart()
  }

  componentDidUpdate () {
    if (this.state.myChart.data) {
      this.state.myChart.data.datasets[0].data = this.props.words.wpmList
      this.state.myChart.update()
    }
  }
  setupChart () {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'WPM',
          data: this.props.words.wpmList,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    })
    this.setState({myChart})
  }

  render () {
    return (
      <div>
        <canvas id='myChart' style={{width: '100% !important'}} />
      </div>
    )
  }
}

const { object, func } = React.PropTypes

ChartInfo.propTypes = {
  words: object,
  setupChart: func
}

const mapStateToProps = (state) => ({ words: state.words })
export default connect(mapStateToProps, { })(ChartInfo)
