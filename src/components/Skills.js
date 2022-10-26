import React, { Component } from 'react';
import uniqid from 'uniqid';
import SkillsRender from './SkillsRender';
import form from './styles/forms.module.css';

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: { text: '', id: uniqid() },
      skills: [],
      isEdit: true,
      isEmpty: false,
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

  onDeleteClick = (id, e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
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
      <div style={this.props.style}>
        {isEdit ? (
          <form className={form.formStyle}>
            <input onChange={this.onSkillChange} type='text'></input>
            <button onClick={this.onSkillSubmit} type='submit'>
              Add
            </button>
          </form>
        ) : (
          <div style={this.props.style} onClick={this.changeEdit}>
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
