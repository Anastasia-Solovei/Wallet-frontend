import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import s from './LogInForm.module.css';
import sprite from '../../images/svg_sprite.svg';

import Button from '../Button/Button';

const LogInForm = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be minimum 6 characters')
      .max(12, 'Password should be maximum 12 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
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
      )}
    </Formik>
  );
};

export default LogInForm;
