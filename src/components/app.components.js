import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="p-4">
        {this.props.children}
      </div>
    );
  }
}
