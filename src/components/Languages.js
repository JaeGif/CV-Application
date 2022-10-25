import React, { Component } from 'react';
import Skills from './Skills';

/* Since Languages is a list component with the same properties as Skills, I can just reuse skills with no changes
reusing skills causes a new instance of "this" and a new state to be made, so one list's state will not affect the
other lists state */
export class Languages extends Component {
  render() {
    return (
      <div style={divSpace}>
        <Skills style={this.props.style}></Skills>
      </div>
    );
  }
}

export default Languages;

const divSpace = {};
