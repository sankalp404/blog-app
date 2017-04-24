import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="well">
        React Starter
        {this.props.children}
      </div>
    );
  }
}
