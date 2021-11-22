import React, { useEffect, useState } from 'react';
import currencyApi from '../../services/currencyApi';
import Loader from '../Loader';
import { currencies } from '../../assets/constants';
import styles from './CurrencyTab.module.css';

export default function CurrencyTable() {
  const [currency, setCurrency] = useState([]);

  // standart
  // useEffect(() => {
  //   const fetchCurrency = async () => {
  //     const data = await currencyApi.fetchCurrency();
  //     const filtredCurrencies = [];
  //     currencies.forEach(currency => {
  //       data.forEach(element => {
  //         parseInt(element.buy).toFixed(2);
  //         if (element.ccy === currency) {
  //           filtredCurrencies.push({
  //             ccy: element.ccy,
  //             buy: Number(element.buy).toFixed(2),
  //             sale: Number(element.sale).toFixed(2),
  //           });
  //         }
  //       });
  //     });
  //     setCurrency(filtredCurrencies);
  //   };
  //   fetchCurrency();
  // }, []);

  // bonus
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
      localStorage.setItem('currency', JSON.stringify(filtredCurrencies));
      localStorage.setItem('currencyTime', Date.now());
    };
    let currencyLS = JSON.parse(localStorage.getItem('currency'));
    let currencyTime = JSON.parse(localStorage.getItem('currencyTime'));
    if (!currencyLS) {
      fetchCurrency();
    }
    if (Date.now() - currencyTime > 3600000) {
      fetchCurrency();
    } else {
      setCurrency(currencyLS);
    }
  }, []);

  return (
    <div className={styles.currency}>
      {currency.length === 0 ? (
        <div className={styles.loader}>
          <Loader color="#ffffff" />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Currency</td>
              <td>Sell</td>
              <td>Buy</td>
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
