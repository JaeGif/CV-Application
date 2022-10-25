import React, { Component } from 'react';
import form from './styles/forms.module.css';

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
          <form style={formVisibilityAid} className={form.formStyle}>
            <div className={form.labelFields}>
              <label htmlFor='phone'>Phone Number</label>
              <input
                onChange={this.onPhoneChange}
                name='phone'
                type='text'
                placeholder={phone}
              ></input>
            </div>
            <div className={form.labelFields}>
              <label htmlFor='email'>Email</label>
              <input
                onChange={this.onEmailChange}
                name='email'
                type='email'
                placeholder={email}
              ></input>
            </div>
            <div className={form.labelFields}>
              <label htmlFor='city'>City</label>
              <input
                onChange={this.onCityChange}
                name='city'
                type='text'
                placeholder={city}
              ></input>
            </div>
            <div className={form.labelFields}>
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
          <div style={this.props.style} onClick={this.changeEdit}>
            <p style={phoneShift}>{phone}</p>
            <p style={emailShift}>{email}</p>
            <div style={addressShift}>
              <p>{city},</p>
              <p>{state}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;

const phoneShift = {
  marginTop: '-20px',
};
const emailShift = {
  marginTop: '5px',
};
const addressShift = {
  marginBottom: '-10px',
};

const formVisibilityAid = {
  backgroundColor: 'white',
  color: 'black',
  padding: '10px',
  border: '2px solid navy',
  borderRadius: '5px',
};
