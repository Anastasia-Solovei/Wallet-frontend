import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { Formik } from 'formik';
import * as yup from 'yup';
import { transactionsOperations } from '../../redux/transactions';
import sprite from '../../images/svg_sprite.svg';
import s from './FormAddTransactions.module.css';

const dayValue = new Date().getDate();
const monthValue = new Date().getMonth() + 1;
const yearValue = new Date().getYear() + 1900;
const dateValue = dayValue + '.' + monthValue + '.' + yearValue;

export default function FormAddTransactions({ onClose }) {
  const dispatch = useDispatch();
  const [type, setType] = useState('expenses');
  const [category, setCategory] = useState('main');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(dateValue);
  const [day, setDay] = useState(dayValue);
  const [month, setMonth] = useState(monthValue);
  const [year, setYear] = useState(yearValue);
  const [comment, setComment] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'transaction':
        setType(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'amount':
        setAmount(Number(value));
        break;
      case 'comment':
        setComment(value);
        break;

      default:
        return;
    }
  };

  //   const handleDateChange = date => {
  //     const chooseDate =
  //       date._d.getDate() +
  //       '.' +
  //       (date._d.getMonth() + 1) +
  //       '.' +
  //       date._d.getFullYear();
  //     setDate(chooseDate);
  //     const day = date._d.getDate();
  //     setDay(day);
  //     const month = date._d.getMonth() + 1;
  //     setMonth(month);
  //     const year = date._d.getYear() + 1900;
  //     setYear(year);
  //   };

  const handleSubmit = event => {
    event.preventDefault();

    if (amount === '') {
      return toast.info('Enter the transaction amount!');
    }

    dispatch(
      transactionsOperations.addTransactions({
        type,
        category,
        amount,
        date,
        day,
        month,
        year,
        comment,
      }),
    );
    reset();
    onClose();
  };

  const reset = () => {
    setType('expenses');
    setCategory('main');
    setAmount('');
    setDate(dateValue);
    setDay(dayValue);
    setMonth(monthValue);
    setYear(yearValue);
    setComment('');
  };

  const validationsSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError('Enter the number')
      .min(0)
      .required('Required field'),
    comments: yup.string().typeError('Enter the text'),
  });

  return (
    //  <form onSubmit={handleSubmit}>
    <Formik
      initialValues={{
        type: 'expenses',
        category: 'main',
        amount: '',
        date: dateValue,
        day: dayValue,
        month: monthValue,
        year: yearValue,
        comment: '',
      }}
      validateOnBlur
      onSubmit={values => {
        dispatch(transactionsOperations.addTransactions(values));
        reset();
        onClose();
      }}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleDateChange,
        isValid,
        dirty,
      }) => (
        <>
          <div className={s.unionRadio}>
            <label>
              <input
                type={'radio'}
                name={'type'}
                value={'income'}
                onChange={handleChange}
              />
              Income
            </label>
            <label>
              <input
                type={'radio'}
                name={'type'}
                value={'expenses'}
                checked
                onChange={handleChange}
              />
              Expenses
            </label>
          </div>
          <div>
            <select
              className={s.input}
              name={'category'}
              value={values.category}
              onChange={handleChange}
            >
              <option value="main">Main</option>
              <option value="food">Food</option>
              <option value="car">Car</option>
              <option value="me">Me</option>
              <option value="children">Children</option>
              <option value="house">House</option>
              <option value="education">Education</option>
              <option value="leisure">Leisure</option>
              <option value="other">Other</option>
            </select>
            {touched.amount && errors.amount && <p>{errors.amount}</p>}
            <div className={s.unionInput}>
              <input
                type={'text'}
                name={'amount'}
                placeholder={'0.00'}
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              <div className={s.date}>
                <Datetime
                  dateFormat="DD.MM.YYYY"
                  timeFormat={false}
                  closeOnSelect={true}
                  isValidDate={current => {
                    let today = new Date();
                    return current.isBefore(today);
                  }}
                  inputProps={{
                    style: {},
                  }}
                  name={'date'}
                  value={values.date}
                  onChange={date => {
                    const chooseDate =
                      date._d.getDate() +
                      '.' +
                      (date._d.getMonth() + 1) +
                      '.' +
                      date._d.getFullYear();
                    setDate(chooseDate);
                    const day = date._d.getDate();
                    setDay(day);
                    const month = date._d.getMonth() + 1;
                    setMonth(month);
                    const year = date._d.getYear() + 1900;
                    setYear(year);
                  }}
                />
                <svg className={s.img}>
                  <use href={sprite + '#icon-calendar'}></use>
                </svg>
              </div>
            </div>
            {touched.comment && errors.comment && <p>{errors.comment}</p>}
            <input
              className={s.input}
              type={'text'}
              name={'comment'}
              placeholder={'Comment'}
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </div>
          <button
            className={s.add}
            disabled={!isValid && !dirty}
            type={'submit'}
            name="add"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            className={s.cancel}
            type={'button'}
            name={'cancel'}
            onClick={onClose}
          >
            Cancel
          </button>
        </>
      )}
    </Formik>
    //  </form>
  );
}
