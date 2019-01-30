import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import './main.css';
import webpackPractice from 'webpack-practice-mm';
class Button extends Component {
  render() {
    return <React.Fragment>Hello,Webpack！！

<webpackPractice />

    </React.Fragment>
  }
}

render(<Button/>, window.document.getElementById('app'));