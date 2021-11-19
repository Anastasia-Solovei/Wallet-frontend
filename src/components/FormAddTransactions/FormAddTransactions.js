import { useState } from 'react';
// import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from '../../redux/transactions';
import s from './FormAddTransactions.module.css';

const dateValue =
  new Date().getFullYear() +
  '-' +
  (new Date().getMonth() + 1) +
  '-' +
  new Date().getDate();

export default function FormAddTransactions({ onClose }) {
  const dispatch = useDispatch();
  const [transactionType, setTransactionType] = useState('expenses');
  const [category, setCategory] = useState('main');
  const [sum, setSum] = useState('');
  const [date, setDate] = useState(dateValue);
  const [comment, setComment] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'transaction':
        setTransactionType(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(Number(value));
        break;
      case 'date':
        setDate(value);
        break;
      case 'comment':
        setComment(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (sum === '') {
      return alert('Enter the transaction amount!');
      // return toast.info('Enter the transaction amount!');
    }

    dispatch(
      transactionsOperations.addTransaction({
        id: uuidv4(),
        transactionType,
        category,
        sum,
        date,
        comment,
      }),
    );
    reset();
  };

  const reset = () => {
    setTransactionType('expenses');
    setCategory('main');
    setSum('');
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
            checked={transactionType === 'income'}
            onChange={handleChange}
          />
          Income
        </label>
        <label>
          <input
            type="radio"
            name="transaction"
            value="expenses"
            checked={transactionType === 'expenses'}
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
            name="sum"
            placeholder="0.00"
            value={sum}
            onChange={handleChange}
          ></input>
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          ></input>
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
