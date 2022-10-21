import React, { Component } from 'react';

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: 'John Doe',
      jobTitle: 'Jr. Software Developer',
      summary:
        "I'm a passionate learner teaching myself Fullstack Web Development using the Odin Project and other free online resources to supplement my education.",
      isEdit: false,
    };
  }

  onFullNameChange = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };
  onTitleChange = (e) => {
    this.setState({
      jobTitle: e.target.value,
    });
  };
  onSummaryChange = (e) => {
    this.setState({
      summary: e.target.value,
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
    const isEdit = this.state.isEdit;
    return (
      <div>
        {isEdit ? (
          <form>
            <div>
              <div>
                <label htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  placeholder={this.state.fullName}
                  onChange={this.onFullNameChange}
                  name='fullName'
                ></input>
              </div>
              <div>
                <label htmlFor='jobTitle'>Title</label>
                <input
                  type='text'
                  placeholder={this.state.jobTitle}
                  onChange={this.onTitleChange}
                  name='jobTitle'
                ></input>
              </div>
              <div>
                <label htmlFor='summary'>Summary</label>
                <textarea
                  type='text'
                  placeholder={this.state.summary}
                  onChange={this.onSummaryChange}
                  name='summary'
                ></textarea>
              </div>

              <button onClick={this.changeEdit} type='submit'>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <h2>{this.state.fullName}</h2>
            <h3>{this.state.jobTitle}</h3>
            <p>{this.state.summary}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PersonalInfo;
