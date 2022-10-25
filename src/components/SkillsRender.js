import React, { Component } from 'react';
import trash from '../assets/delete.svg';
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
              <li style={trashSpace} key={skill.id}>
                {skill.text}
                <img
                  onClick={(e) => {
                    this.props.delete(skill.id, e);
                  }}
                  src={trash}
                  style={trashIconStyle}
                  alt='trash'
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SkillsRender;

const trashIconStyle = {
  height: '20px',
  width: 'auto',
  marginBottom: '-5px',
};

const trashSpace = {
  display: 'flex',
  justifyContent: 'space-between',
};
