import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './main.css';
import m1 from './mi.jpg';
class Button extends Component {
  render() {
    return (
      <React.Fragment>
        Hello,Webpack！！
        <img src={m1} alt=""/>
    </React.Fragment>
    )
  }
}

render(<Button />, window.document.getElementById('app'));
