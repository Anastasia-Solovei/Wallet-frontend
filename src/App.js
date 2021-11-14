import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from './redux/auth/authOperations';
import ButtonAddTransactions from './components/ButtonAddTransactions';
import DiagramTab from './components/DiagramTab';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      Hello world! <DiagramTab />
      <ButtonAddTransactions />
    </div>
  );
}

export default App;
