import React, { Component } from 'react';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      phone: '1234567890',
      email: 'totallyReal@gmail.com',
      city: 'San Francisco',
      state: 'California',
      isEdit: false,
    };
  }
  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  onStateChange = (e) => {
    this.setState({
      state: e.target.value,
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
    const { phone, email, city, state, isEdit } = this.state;
    return (
      <div>
        {isEdit ? (
          <form>
            <div>
              <label htmlFor='phone'>Phone Number</label>
              <input
                onChange={this.onPhoneChange}
                name='phone'
                type='text'
                placeholder={phone}
              ></input>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                onChange={this.onEmailChange}
                name='email'
                type='email'
                placeholder={email}
              ></input>
            </div>
            <div>
              <label htmlFor='city'>City</label>
              <input
                onChange={this.onCityChange}
                name='city'
                type='text'
                placeholder={city}
              ></input>
            </div>
            <div>
              <label htmlFor='state'>State</label>
              <input
                onChange={this.onStateChange}
                name='state'
                type='text'
                placeholder={state}
              ></input>
            </div>
            <button onClick={this.changeEdit} type='submit'>
              Submit
            </button>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{city}</p>
            <p>{state}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;
