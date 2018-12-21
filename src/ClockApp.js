import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import AddTimezone from './components/AddTimezone'
import BasicClockContainer from './components/BasicClockContainer'


class ClockApp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      localtime: '',
      selectedCity: '',
      listClocks: [],
      message: ''

    };

    this.handleChange = this.handleChange.bind(this);


  }



  handleChange(selectedOption) {
    console.log(`Option selected:`, selectedOption);
    let lists = this.state.listClocks;

    console.log(selectedOption.label);
    let index = lists.indexOf(selectedOption);
    if (index == -1) {
      lists.push(selectedOption);
      this.setState({
        listClocks: lists,
        message: ''
      })

    } else {
      this.setState({
        message: 'Already exist!!!'
      })

    }
  }

  deleteItem(item) {

    console.log("Delete item");
    let lists = this.state.listClocks;
    let index = lists.indexOf(item);
    lists.splice(index, 1);
    this.setState({
      listClocks: lists,
      message: ''
    })
  }


  render() {
    const { selectedOption, options, message, listClocks } = this.state;

    return (
      <div>
        <Header title="Basic Timezone Clock" />
        <div className="row" style={{ padding: 5 }}>
          <div className="col-md-7 col-sm-7 col-lg-5">
            <div id="localClock">
              <BasicClockContainer titleClock={"Local Clock"} offset={0} />
            </div>
            <div id="clockList" className="row">
              {
                listClocks.map((item) => {
                  return (

                    <div key={item.label} className="col-md-6 col-sm-12 col-lg-4 col card-clock">
                      <BasicClockContainer
                        titleClock={item.label} offset={item.offset} />
                    </div>

                  )
                })
              }
            </div>
          </div>


          <div className="col-md-4 col-sm-5 col-lg-4">
            {
              (message)
                ?<div className="alert alert-danger" role="alert">{message}</div>
                : ""
            }

            <AddTimezone
              handleChange={this.handleChange}
              selectedOption={this.state.selectedOption} />
            <div className="row " id="container-list-clocks-badges">
              {
                listClocks.map((item) => {
                  return (
                    <div key={item.label} className="col-md col-sm col-lg col">
                      <div  className="badge badge-secondary badge-pill badge-label">
                        <p className="pbadge">{item.label}
                          <span className="span-btn-badge">
                            <button
                              type="button"
                              className="btn btn-badge"
                              onClick={this.deleteItem.bind(this, item)}>X</button>
                          </span>
                        </p>


                      </div>

                    </div>
                  )

                })
              }
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ClockApp