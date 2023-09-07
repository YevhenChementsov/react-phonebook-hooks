import { Component } from 'react';

import { Clock } from './Time.styled';

export class Time extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <Clock>
        {this.state.date.toLocaleTimeString([], { timeStyle: 'short' })}
      </Clock>
    );
  }
}
