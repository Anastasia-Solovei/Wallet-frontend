import styles from './CurrencyTab.module.css';
import React, { useEffect, useState } from 'react';
import currencyApi from '../../services/currencyApi';
// import { Loader } from '../Loader';
import { currencies } from '../../assets/constants';

export default function CurrencyTable() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await currencyApi.fetchCurrency();
      const filtredCurrencies = [];
      currencies.forEach(currency => {
        data.forEach(element => {
          parseInt(element.buy).toFixed(2);
          if (element.ccy === currency) {
            filtredCurrencies.push({
              ccy: element.ccy,
              buy: Number(element.buy).toFixed(2),
              sale: Number(element.sale).toFixed(2),
            });
          }
        });
      });
      setCurrency(filtredCurrencies);
    };
    fetchCurrency();
  }, []);

  return (
    <div className={styles.currency}>
      {currency.length === 0 ? (
        // <Loader />
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Валюта</td>
              <td>Продажа</td>
              <td>Покупка</td>
            </tr>
          </thead>
          <tbody>
            {currency.map(item => {
              return (
                <tr key={item.ccy}>
                  <td>{item.ccy}</td>
                  <td>{item.buy}</td>
                  <td>{item.sale}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}