import React, { useState } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
import s from './FormAddTransactions.module.css';

const dateValue =
  new Date().getDate() +
  '.' +
  (new Date().getMonth() + 1) +
  '.' +
  new Date().getFullYear();

export default function FormAddTransactions({ onClose }) {
  const dispatch = useDispatch();
  const [type, setType] = useState('expenses');
  const [category, setCategory] = useState('main');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(dateValue);
  const [comments, setComment] = useState('');

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
      case 'date':
        setDate(value);
        break;
      case 'comments':
        setComment(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (amount === '') {
      // return alert('Enter the transaction amount!');
      return toast.info('Enter the transaction amount!');
    }

    dispatch(
      transactionsOperations.addTransactions({
        //   id: uuidv4(),
        type,
        category,
        amount,
        date,
        comments,
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
          {/* Проблема! Не срабатывает handleChange на <Datetime/> */}
          <Datetime
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            inputValue={date}
            initialValue={dateValue}
            name="date"
            // onChange={handleChange}
          />
          {/* <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          ></input> */}
        </div>
        <input
          className={s.input}
          type="text"
          name="comments"
          placeholder="Comment"
          value={comments}
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
