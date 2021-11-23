import React from 'react';
// import { useSelector } from 'react-redux';

const StatsBalance = ({ balance }) => {
  return <>{balance.toFixed(2)}</>;
};
export default StatsBalance;
