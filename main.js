import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './main.css';
class Button extends Component {
  render() {
    return (
      <React.Fragment>
        Hello,Webpack！！
    </React.Fragment>
    )
  }
}

render(<Button />, window.document.getElementById('app'));