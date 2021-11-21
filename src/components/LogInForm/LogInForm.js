import React from 'react';
import { useDispatch } from 'react-redux';
//import { useState } from 'react';
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
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const handleSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));
    //setEmail('');
    //setPassword('');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is a required'),
    password: Yup.string('Enter your password')
      .min(6, 'Password should be  minimum 6 characters')
      .max(12, 'Password should be  maximum 12 characters')
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
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        formSubmit,
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

          <Button type="submit">Log in</Button>
          <Link to="/register" className={s.link}>
            Registration
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default LogInForm;
