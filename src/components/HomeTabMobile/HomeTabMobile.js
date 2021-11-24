import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import styles from './HomeTabMobile.module.css';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';
import { fetchTransactions } from '../../redux/transactions/transactionsOperations';

const HomeTabMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const transactions = useSelector(getTransactions);

  return (
    <div className={styles.container}>
      {transactions?.map(item => {
        return (
          <div
            key={item.id}
            className={
              styles[
                item.type === 'incomes'
                  ? 'wrapperTabIncomes'
                  : 'wrapperTabExpenses'
              ]
            }
          >
            <table className={styles.mobileTab}>
              <tbody>
                <tr>
                  <th scope="row">Date</th>
                  <td>{item.date}</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>{item.type === 'incomes' ? '+' : '-'}</td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{item.category}</td>
                </tr>
                <tr>
                  <th scope="row">Comment</th>
                  <td>{item.comment}</td>
                </tr>
                <tr>
                  <th scope="row">Amount</th>
                  <td
                    className={
                      styles[
                        item.type === 'incomes'
                          ? 'tdAmountIncomes'
                          : 'tdAmountExpenses'
                      ]
                    }
                  >
                    {item.amount}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Balance</th>
                  <td>{item.balance}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      <ButtonAddTransactions />
      <ModalAddTransaction />
    </div>
  );
};
export default HomeTabMobile;

// ) : null}

/* {transactions.length > 0 ? ( */
