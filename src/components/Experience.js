import form from './styles/forms.module.css';
import { useState } from 'react';

export function Experience(props) {
  const [company, setCompany] = useState('Google');
  const [jobTitle, setJobTitle] = useState('Sr.Software Engineer');
  const [start, setStart] = useState('2016');
  const [end, setEnd] = useState('2020');
  const [city, setCity] = useState('Seattle');
  const [duties, setDuties] = useState(
    "I did all of these things at my last job, but it's not a list because the developer doesn't like making everything a list on a resume."
  );
  const [isEdit, setIsEdit] = useState(false);

  const onCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const onStartChange = (e) => {
    setStart(e.target.value.slice(0, 4));
  };

  const onEndChange = (e) => {
    setEnd(e.target.value.slice(0, 4));
  };

  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onDutiesChange = (e) => {
    setDuties(e.target.value);
  };

  const onJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const changeEdit = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div>
      {isEdit ? (
        <form className={form.formStyle}>
          <div className={form.labelFields}>
            <label htmlFor='company'>Company</label>
            <input
              onChange={onCompanyChange}
              name='company'
              type='text'
              placeholder={company}
            ></input>
          </div>
          <div className={form.labelFields}>
            <label htmlFor='title'>Title</label>
            <input
              onChange={onJobTitleChange}
              name='title'
              type='text'
              placeholder={jobTitle}
            ></input>
          </div>
          <div className={form.labelFields}>
            <label htmlFor='city'>City</label>
            <input
              onChange={onCityChange}
              name='city'
              type='text'
              placeholder={city}
            ></input>
          </div>
          <div className={form.labelFields}>
            <label htmlFor='start'>Start Date</label>
            <input
              onChange={onStartChange}
              name='start'
              type='date'
              placeholder={start}
            ></input>
          </div>
          <div className={form.labelFields}>
            <label htmlFor='end'>End Date</label>
            <input
              onChange={onEndChange}
              name='end'
              type='date'
              placeholder={end}
            ></input>
          </div>
          <div className={form.labelFields}>
            <label htmlFor='duties'>Job Duties</label>
            <textarea
              className={form.dutiesArea}
              onChange={onDutiesChange}
              name='duties'
              placeholder={duties}
            ></textarea>
          </div>
          <button onClick={changeEdit} type='button'>
            Add
          </button>
        </form>
      ) : (
        <div style={props.style} onClick={changeEdit}>
          <div>
            <h3>{company}</h3>
            <h3>{jobTitle}</h3>
          </div>
          <span style={dateCitySpan}>
            <span style={dateStyle}>
              <p>{start}</p>
              <p>-</p>
              <p>{end}</p>
            </span>
            <p>{city}</p>
          </span>
          <p style={dutiesStyle}>{duties}</p>
        </div>
      )}
    </div>
  );
}

export default Experience;

const dateStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '5px',
};
const dateCitySpan = {
  display: 'flex',
  justifyContent: 'space-between',
};
const dutiesStyle = {
  marginTop: '5px',
};
