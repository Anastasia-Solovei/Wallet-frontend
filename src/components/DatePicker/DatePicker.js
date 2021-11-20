import React, { useState } from 'react';
import Typography from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import styles from './DatePicker.module.css';
import sprite from '../../images/svg_sprite.svg';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = date => {
    setDate(date);
    console.log(date._d);
    console.log(date._d.getMonth() + 1);
    console.log(date._d.getYear() + 1900);
  };
  return (
    <div>
      <Datetime
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        inputProps={{
          style: {
            width: '87px',
            height: '24px',
            fontSize: '18px',
            border: '0',
          },
        }}
        value={date}
        onChange={handleDateChange}
        closeOnSelect={true}
        isValidDate={current => {
          let today = new Date();
          return current.isBefore(today);
        }}
      />
      <svg className={styles.img}>
        <use href={sprite + '#icon-calendar'}></use>
      </svg>
    </div>
  );
};
export default DatePicker;
