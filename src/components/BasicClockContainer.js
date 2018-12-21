import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';

export default class BasicClockContainer extends Component {

  constructor(props) {
    super();
     
  }

  render() {
    const {  } = this.state;

    return (
      <div className="card text-center">
        <div className="card-header text-white bg-secondary">
          <h4> {this.props.titleClock} </h4>
        </div>
        <div className="card-body">
            <div><Clock offset={this.props.offset}/></div>
        </div>
      </div>
    );
  }

}