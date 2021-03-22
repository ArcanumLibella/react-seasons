import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'

export default class App extends Component {
  state = { lat: null, errorMessage: ''}

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  render () {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className='App'>
          <h1>Error : {this.state.errorMessage}</h1>
        </div>
      )
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className='App'>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      )
    }

    return (
      <h1>Loading ...</h1>
    )
  }
}
