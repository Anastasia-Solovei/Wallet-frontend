import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { months, years } from '../../assets/constants';
import styles from './InputDate.module.css';

export default function InputDate() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChangeMonth = event => {
    setMonth(event.target.value);
  };
  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1 }}>
        <Select
          className={styles.selectDate}
          value={month}
          onChange={handleChangeMonth}
        >
          {months.map((month, index) => {
            return <MenuItem value={index}>{month}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <Select
          className={styles.selectDate}
          value={year}
          onChange={handleChangeYear}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {years.map(year => {
            return <MenuItem value={year}>{year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
