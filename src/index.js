import React, { Component } from 'react';
import { render } from 'react-dom';
import ClockApp from './ClockApp';
import ReactTimezone from 'react-timezone' 
import './style.css';

render(<ClockApp />, document.getElementById('root'));
