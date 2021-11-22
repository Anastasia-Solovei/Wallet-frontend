import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { transactionsOperations } from '../../redux/transactions';
import sprite from '../../images/svg_sprite.svg';
import s from './FormAddTransactions.module.css';

const dayValue = new Date().getDate();
const monthValue = new Date().getMonth() + 1;
const yearValue = new Date().getYear() + 1900;
const dateValue = dayValue + '.' + monthValue + '.' + yearValue;

const DatetimeField = ({ name, onChange }) => {
  return (
    <Datetime
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      closeOnSelect={true}
      isValidDate={current => {
        let today = new Date();
        return current.isBefore(today);
      }}
      initialValue={dateValue}
      onChange={value => {
        onChange(
          name,
          value._d.getDate() +
            '.' +
            (value._d.getMonth() + 1) +
            '.' +
            (value._d.getYear() + 1900),
        );
      }}
    />
  );
};

export default function FormAddTransactions({ onClose }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: 'expenses',
      category: 'main',
      amount: '',
      date: dateValue,
      day: dayValue,
      month: monthValue,
      year: yearValue,
      comment: '',
    },

    validationSchema: yup.object().shape({
      amount: yup
        .number()
        .typeError('Enter the number')
        .min(0)
        .required('Required field'),
      comment: yup.string().max(15, 'No more than 15 characters allowed '),
    }),

    onSubmit: values => {
      const type = values.type;
      const category = values.category;
      const amount = Number(values.amount);
      const date = values.date;
      const arrayDate = date.split('.');
      const day = Number(arrayDate[0]);
      const month = Number(arrayDate[1]);
      const year = Number(arrayDate[2]);
      const comment = values.comment;

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
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.unionRadio}>
        <label>
          <input
            type={'radio'}
            name={'type'}
            value={'incomes'}
            checked={formik.values.type === 'incomes'}
            onChange={formik.handleChange}
          />
          Incomes
        </label>
        <label>
          <input
            type={'radio'}
            name={'type'}
            value={'expenses'}
            checked={formik.values.type === 'expenses'}
            onChange={formik.handleChange}
          />
          Expenses
        </label>
      </div>
      <div>
        <select
          className={s.input}
          name={'category'}
          value={formik.values.category}
          onChange={formik.handleChange}
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
        {formik.touched.amount && formik.errors.amount && (
          <p>{formik.errors.amount}</p>
        )}
        <div className={s.unionInput}>
          <input
            type={'text'}
            name={'amount'}
            placeholder={'0.00'}
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className={s.date}>
            <DatetimeField
              name="date"
              value={formik.values.date}
              onChange={formik.setFieldValue}
            />
            <svg className={s.img}>
              <use href={sprite + '#icon-calendar'}></use>
            </svg>
          </div>
        </div>
        {formik.touched.comment && formik.errors.comment && (
          <p>{formik.errors.comment}</p>
        )}
        <input
          className={s.input}
          type="text"
          name="comment"
          placeholder="Comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <button className={s.add} type="submit">
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
