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
  // ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60']
  setupChart () {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        // labels: [],
        datasets: [{
          label: 'WPM',
          data: this.props.words.wpmList,
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          // borderColor: [
          //   'rgba(255,99,132,1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
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
