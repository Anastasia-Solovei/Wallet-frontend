import React from 'react';
import { Link } from 'react-router-dom';

import s from './LogInForm.module.css';
import Button from '../Button/Button';

const LogInForm = () => {
  return (
    <form className={s.form}>
      <label>
        <input
          className={s.inputEmail}
          name="email"
          type="email"
          placeholder="E-mail"
        />
      </label>
      <label>
        <input
          className={s.inputLock}
          name="password"
          type="password"
          placeholder="Password"
        />
      </label>
      <Button type="submit">Log in</Button>
      <Link to="/register" className={s.link}>
        Registration
      </Link>
    </form>
  );
};

export default LogInForm;
