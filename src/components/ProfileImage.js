import React, { Component } from 'react';
import Jae from '../assets/zoinks.jpg';

export class ProfileImage extends Component {
  constructor() {
    super();
    this.state = {
      img: Jae,
      isEdit: false,
    };
  }
  onImageChange = (e) => {
    this.setState({
      img: e.target.value,
    });
    console.log(this.state.img);
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
    const { img, isEdit } = this.state;
    let imageParsed = (img) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        return reader.result;
      };
    };
    const imageStyles = {
      height: '100px',
      width: '100px',
      backgroundImage: `url(${imageParsed})`, //Come back here
      backgroundSize: '100px 100px',
    };

    return (
      <div>
        {isEdit ? (
          <form>
            <div>
              <input
                type='file'
                accept='image/*'
                onChange={this.onImageChange}
              />
            </div>
            <button onClick={this.changeEdit}>Submit</button>
          </form>
        ) : (
          <div onClick={this.changeEdit}>
            <div style={imageStyles}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileImage;
