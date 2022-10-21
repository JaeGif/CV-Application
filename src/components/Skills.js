import React, { Component } from 'react';
import uniqid from 'uniqid';
import SkillsRender from './SkillsRender';

export class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skill: { text: '', id: uniqid() },
      skills: [],
      isEdit: true,
    };
  }
  onSkillSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: { text: '', id: uniqid() },
    });
    this.changeEdit();
  };
  onSkillChange = (e) => {
    this.setState({
      skill: { text: e.target.value, id: this.state.skill.id },
    });
  };

  onDeleteClick = (id) => {
    this.setState({
      skills: this.state.skills.filter((el) => id !== el.id),
    });
  };

  changeEdit = () => {
    if (this.state.isEdit) {
      this.setState({
        isEdit: false,
      });
    } else {
      this.setState({
        isEdit: true,
      });
    }
  };
  render() {
    const { skills, isEdit } = this.state;
    return (
      <div>
        {isEdit ? (
          <form>
            <input onChange={this.onSkillChange} type='text'></input>
            <button onClick={this.onSkillSubmit} type='submit'>
              Add
            </button>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <SkillsRender
              skills={skills}
              delete={this.onDeleteClick}
            ></SkillsRender>
          </div>
        )}
      </div>
    );
  }
}

export default Skills;
