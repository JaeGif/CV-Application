import React, { Component } from 'react';

class SkillsRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.skills.map((skill) => {
            return (
              <li key={skill.id}>
                {skill.text}
                <p
                  onClick={(e) => {
                    this.props.delete(skill.id, e);
                  }}
                >
                  Trash
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SkillsRender;
