import React from 'react';
// import { useSelector } from 'react-redux';

const Balance = () => {
  //   const totalBalance = useSelector(state => state.finance.totalBalance);
  const totalBalance = 100501;
  return totalBalance.toFixed(2);
};
export default Balance;
