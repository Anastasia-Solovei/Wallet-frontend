import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getTransactionsByDate } from '../../redux/transactions/transactionsOperations';
import { months, years } from '../../assets/constants';
import styles from './InputDate.module.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function InputDate() {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChangeMonth = event => {
    setMonth(event.target.value);
  };
  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  useEffect(() => {
    dispatch(getTransactionsByDate(month + 1, year));
  }, [dispatch, month, year]);

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1 }} className={styles.formControl}>
        <Select
          className={styles.selectDate}
          value={month}
          onChange={handleChangeMonth}
        >
          {months.map((month, index) => {
            return (
              <MenuItem value={index} key={uuidv4()}>
                {month}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} className={styles.formControl}>
        <Select
          className={styles.selectDate}
          value={year}
          onChange={handleChangeYear}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {years.map(year => {
            return (
              <MenuItem value={year} className={styles.menuItem} key={uuidv4()}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
