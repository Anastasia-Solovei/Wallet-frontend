import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from '../../redux/session/sessionOperations';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import s from './LogInForm.module.css';
import sprite from '../../images/svg_sprite.svg';

import Button from '../Button/Button';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validationSchema} /*values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }*/
      onSubmit={formSubmit}
    >
      {({
        isLoading,
        formSubmit,

        /* and other goodies */
      }) => (
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
                required
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
                required
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
      )}
    </Formik>
  );
};

export default LogInForm;
