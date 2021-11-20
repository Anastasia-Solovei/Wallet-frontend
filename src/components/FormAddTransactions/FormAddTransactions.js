import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { useDispatch } from 'react-redux';
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

  const handleDateChange = date => {
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
  };

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

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.unionRadio}>
        <label>
          <input
            type="radio"
            name="transaction"
            value="income"
            checked={type === 'income'}
            onChange={handleChange}
          />
          Income
        </label>
        <label>
          <input
            type="radio"
            name="transaction"
            value="expenses"
            checked={type === 'expenses'}
            onChange={handleChange}
          />
          Expenses
        </label>
      </div>
      <div>
        <select
          className={s.input}
          name="category"
          value={category}
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
        <div className={s.unionInput}>
          <input
            type="text"
            name="amount"
            placeholder="0.00"
            value={amount}
            onChange={handleChange}
          ></input>
          <div className={s.date}>
            <Datetime
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              closeOnSelect={true}
              value={date}
              name="date"
              onChange={handleDateChange}
              isValidDate={current => {
                let today = new Date();
                return current.isBefore(today);
              }}
              inputProps={{
                style: {},
              }}
            />
            <svg className={s.img}>
              <use href={sprite + '#icon-calendar'}></use>
            </svg>
          </div>
        </div>
        <input
          className={s.input}
          type="text"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={handleChange}
        ></input>
      </div>
      <button className={s.add} type="submit" name="add">
        Add
      </button>
      <button
        className={s.cancel}
        type="button"
        name="cancel"
        onClick={onClose}
      >
        Cancel
      </button>
    </form>
  );
}
