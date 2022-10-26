import Jae from '../assets/zoinks.jpg';
import { useState } from 'react';

export function ProfileImage() {
  const [img, setImg] = useState(Jae);
  const [isEdit, setIsEdit] = useState(false);

  const onImageChange = (e) => {
    setImg(e.target.files[0]);
    console.log(this.state.img);
  };
  const changeEdit = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  const imageStyles = {
    height: '100px',
    width: '100px',
    backgroundImage: `url(${img})`, //Come back here
    backgroundSize: '100px 100px',
  };

  return (
    <div>
      {isEdit ? (
        <form>
          <div>
            <input type='file' accept='image/*' onChange={onImageChange} />
          </div>
          <button onClick={changeEdit}>Submit</button>
        </form>
      ) : (
        <div onClick={changeEdit}>
          <div style={imageStyles}></div>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
