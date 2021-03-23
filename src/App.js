/* eslint-disable react/require-render-return */
import React, { Component } from 'react'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

export default class App extends Component {
  state = { lat: null, errorMessage: ''}

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  appWrapper() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error : {this.state.errorMessage}</h1>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please accept location request'/>
  }

  render () {
    return (
      <div className='App'>
        {this.appWrapper()}
      </div>
    )
  }
}
