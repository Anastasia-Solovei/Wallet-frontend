import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from './redux/auth/authOperations';
import Chart from './components/Chart/Chart';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
