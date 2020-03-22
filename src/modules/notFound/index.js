import React, { Component } from 'react';

export default class Notfound extends Component {
  render() {
    return (
      <div className="base">
        <span className="fs-40 mb-0" role="img" aria-label="microscope">🔬</span>
        <p className="cl-warning fs-20">Nothing to see here</p>
      </div>
    );
  }
}