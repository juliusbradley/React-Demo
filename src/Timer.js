// We import the Component module seperated from the React object
import React, { Component } from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTime: new Date().toString()
    };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime () {
    this.setState({
      currentTime: new Date().toString()
    });
  }

  componentDidMount () {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

//componentWillUnmount will execute if the Timer component is
//removed from the page. To prevent the callback inside setInterval above
//from running continously even if the component has been destroyed,
//clear it with clearInterval

  componentWillUnmount (){
    clearInterval(this.IntervalId);
  }

  render () {
    const { currentTime } = this.state;
    return <h3>Current time: { currentTime }</h3>
  }
}

export default Timer;
