import styles from './Currency.module.css';
import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import currencyApi from '../../services/currencyApi';
// import { LoaderCurrency } from '../Loader';

export default function CurrencyTable() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await currencyApi.fetchCurrency();
      setCurrency(data);
    };
    fetchCurrency();
  }, []);

  return (
    <div className={styles.currency}>
      {!currency ? (
        // <LoaderCurrency />
        <p>Loading...</p>
      ) : (
        <table>
          {/* <thead key={nanoid(3)}> */}
          <tr className={styles.theadTr}>
            <td className={styles.tbodyTd_1}>Currency</td>
            <td className={styles.tbodyTd_2}>Sell</td>
            <td className={styles.tbodyTd_3}>Buy</td>
          </tr>
          {/* </thead> */}
          {/* <tbody key={nanoid(3)}> */}
          {currency.map((item, index) => {
            if (index !== 2) {
              return (
                <tr className={styles.tbodyTr} key={item.ccy}>
                  <td className={styles.tbodyTd_1}>{item.ccy}</td>
                  <td className={styles.tbodyTd_2}>
                    {(parseInt(item.buy * 100, 10) / 100).toFixed(2)}
                  </td>
                  <td className={styles.tbodyTd_3}>
                    {(parseInt(item.sale * 100, 10) / 100).toFixed(2)}
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
          {/* </tbody> */}
        </table>
      )}
    </div>
  );
}
