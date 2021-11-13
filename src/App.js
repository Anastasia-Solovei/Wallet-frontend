import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import * as authOperations from './redux/auth/authOperations';
import Chart from './components/Chart/Chart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return <div className="App">Hello worlod!</div>;
}

export default App;
