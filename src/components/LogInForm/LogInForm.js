import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/session/sessionOperations';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import s from './LogInForm.module.css';
import sprite from '../../images/svg_sprite.svg';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is a required'),
    password: Yup.string('Enter your password')
      .min(6, 'Minimum 6 characters')
      .max(12, 'Maximum 12 characters')
      .required('Password is a required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        touched,
        errors,
        isValid,
        dirty,
        values,
        /* and other goodies */
      }) => (
        <Form className={s.form} onReset={handleReset}>
          <div className={s.titleArea}>
            <h2 className={s.title}>Wallet</h2>

            <svg className={s.walletIcon} width="30px" height="30px">
              <use href={sprite + '#icon-wallet'}></use>
            </svg>
          </div>
          <div className={s.inputArea}>
            <FormInput
              name="email"
              type="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.email && errors.email ? s.inputError : s.input}
            />
            <svg className={s.icon} width="24px" height="24px">
              <use href={sprite + '#icon-email'}></use>
            </svg>
          </div>
          <div className={s.inputArea}>
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                touched.password && errors.password ? s.inputError : s.input
              }
            />
            <svg className={s.icon} width="24px" height="24px">
              <use href={sprite + '#icon-password'}></use>
            </svg>
          </div>

          <Button type="submit" disabled={!(dirty && isValid)}>
            Log in
          </Button>
          <Link to="/register" className={s.link}>
            Registration
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default LogInForm;
