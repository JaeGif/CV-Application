import styles from './styles/fonts.module.css';
import form from './styles/forms.module.css';
import { useState } from 'react';

export function PersonalInfo(props) {
  const [fullName, setFullName] = useState('John Doe');
  const [jobTitle, setJobTitle] = useState('Jr. Software Developer');
  const [summary, setSummary] = useState(
    "I'm a passionate learner teaching myself Fullstack Web Development using the Odin Project and other free online resources to supplement my education."
  );
  const [isEdit, setIsEdit] = useState(false);

  const onFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const onTitleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const changeEdit = (e) => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div style={props.style}>
      {isEdit ? (
        <form className={form.formStyle}>
          <div>
            <div className={form.labelFields}>
              <label htmlFor='fullName'>Full Name</label>
              <input
                type='text'
                placeholder={fullName}
                onChange={onFullNameChange}
                name='fullName'
              ></input>
            </div>
            <div className={form.labelFields}>
              <label htmlFor='jobTitle'>Title</label>
              <input
                type='text'
                placeholder={jobTitle}
                onChange={onTitleChange}
                name='jobTitle'
              ></input>
            </div>
            <div className={form.labelFields}>
              <label htmlFor='summary'>Summary</label>
              <textarea
                type='text'
                placeholder={summary}
                onChange={onSummaryChange}
                name='summary'
                className={form.textArea}
              ></textarea>
            </div>

            <button onClick={changeEdit} type='submit'>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div style={spacing} onClick={changeEdit}>
          <div>
            <h2 className={styles.largeText}>{fullName}</h2>
            <h3 className={styles.titleText}>{jobTitle}</h3>
          </div>
          <p className={styles.regularText}>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
const spacing = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};
