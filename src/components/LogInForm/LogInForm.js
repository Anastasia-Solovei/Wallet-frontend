import React from 'react';
import { Link } from 'react-router-dom';

import s from './LogInForm.module.css';
import sprite from '../../images/svg_sprite.svg';

import Button from '../Button/Button';

const LogInForm = () => {
  return (
    <form className={s.form}>
      <div className={s.titleArea}>
        <h2 className={s.title}>Wallet</h2>
        <svg className={s.walletIcon} width="30px" height="30px">
          <use href={sprite + '#icon-wallet'}></use>
        </svg>
      </div>
      <label>
        <div className={s.inputArea}>
          <input
            className={s.input}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <svg className={s.icon} width="24px" height="24px">
            <use href={sprite + '#icon-email'}></use>
          </svg>
        </div>
      </label>
      <label>
        <div className={s.inputArea}>
          <input
            className={s.input}
            name="password"
            type="password"
            placeholder="Password"
          />
          <svg className={s.icon} width="24px" height="24px">
            <use href={sprite + '#icon-password'}></use>
          </svg>
        </div>
      </label>
      <Button type="submit">Log in</Button>
      <Link to="/register" className={s.link}>
        Registration
      </Link>
    </form>
  );
};

export default LogInForm;
