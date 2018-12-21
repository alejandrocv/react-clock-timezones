
import React, { Component } from 'react';
import { render } from 'react-dom';
import timezones from '../data/timezones'
import Select from 'react-select';

export default class AddTimezone extends Component {
  constructor(props) {
    super();
    this.state = {
      options: timezones,

    }
  }



  render() {
    const { selectedOption, options } = this.state;

    return (
      <div className="card ">
        <div className="card-header text-center">
          <h4>Add Timezone</h4>
        </div>
        <div className="card-body">
          <Select
            value={selectedOption}
            onChange={this.props.handleChange}
            options={options}
          />
        </div>
      </div>
    );
  }

}