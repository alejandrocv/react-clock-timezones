import React, { Component } from 'react';
import { render } from 'react-dom';



export default class Clock extends Component {


  constructor(props) {
    super();

    let dateconf = new Date();
    dateconf.setHours(dateconf.getHours() + props.offset);

    this.state = {
      time: dateconf,
      date: dateconf.getUTCFullYear() + "/" + (dateconf.getUTCMonth() + 1) + "/" + dateconf.getUTCDate(),
      offset: props.offset,
      percent: dateconf.getHours() * 100 / 24
    };
  }


  componentDidMount() {

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let dateconf = new Date();
    dateconf.setHours(dateconf.getHours() + this.state.offset);

    this.setState({
      time: dateconf,
      date: dateconf.getUTCFullYear() + "/" + (dateconf.getUTCMonth() + 1) + "/" + dateconf.getUTCDate(),
      percent: dateconf.getHours() * 100 / 24
    });
  }


  render() {
    const { time, date, percent } = this.state;

    return (
      <div>
        <div> <h4>{time.toLocaleTimeString()}</h4></div>
        <div> <h4>{date}</h4></div>
        <div className="progress" style={{ height: 5 }}>
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${percent}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }

}
