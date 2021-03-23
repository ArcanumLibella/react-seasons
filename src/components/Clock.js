import React from 'react'

export default class Clock extends React.Component {
  state = { time : new Date().toLocaleTimeString()}
  
  componentDidMount() {
      setInterval(() => {
          this.setState({
            time: new Date().toLocaleTimeString()
          })    
      }, 1000)
      console.log(this.state.time)
  }

  
  render() {
      return (
          <div className="time">
              The time is : {this.state.time}
          </div>
      );
  }
}