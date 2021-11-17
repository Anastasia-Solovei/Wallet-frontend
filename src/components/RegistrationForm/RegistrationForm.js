import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import sprite from '../../images/svg_sprite.svg';

export default function RegistrationForm() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Enter your Email'),
    // .matches('!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i'),

    name: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Enter your name'),
    password: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Enter your password')
      .min(6, 'Your password must be longer than 6 characters.')
      .max(12, 'Your password must be no longer than 12 characters.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Enter your password'),
  });

  console.log(validationSchema);

  const buttonS = {
    marginBottom: 20,
  };

  return (
    <div className={s.formContainer}>
      <div className={s.titleWallet}>
        <svg className={s.walletIcon} width="30px" height="30px">
          <use href={sprite + '#icon-wallet'}></use>
        </svg>
        <h2 className={s.title}>Wallet</h2>
      </div>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
          isValid,
        }) => (
          <form className={s.form}>
            <label>
              <div className={s.inputBase}>
                <input
                  className={
                    touched.email && errors.email ? s.inputError : s.input
                  }
                  placeholder={
                    touched.email && errors.email ? errors.email : 'E-mail'
                  }
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <svg className={s.iconForm} width="24px" height="24px">
                  <use
                    className={s.iconUse}
                    href={sprite + '#icon-email'}
                  ></use>
                </svg>
              </div>
            </label>

            <label>
              <div className={s.inputBase}>
                <input
                  className={
                    touched.password && errors.password ? s.inputError : s.input
                  }
                  placeholder={
                    touched.password && errors.password
                      ? errors.password
                      : 'Password'
                  }
                  name="password"
                  type="passwoed"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <svg className={s.iconForm} width="24px" height="24px">
                  <use
                    className={s.iconUse}
                    href={sprite + '#icon-password'}
                  ></use>
                </svg>
              </div>
            </label>

            <label>
              <div className={s.inputBase}>
                <input
                  className={
                    touched.confirmPassword && errors.confirmPassword
                      ? s.inputError
                      : s.input
                  }
                  placeholder={
                    touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : 'Set password'
                  }
                  autoComplete={'off'}
                  type={'password'}
                  name={'confirmPassword'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <svg className={s.iconForm} width="24px" height="24px">
                  <use
                    className={s.iconUse}
                    href={sprite + '#icon-password'}
                  ></use>
                </svg>
                <div className={s.blockCheck}></div>
              </div>
            </label>

            <label>
              <div className={s.inputBase}>
                <input
                  id="name"
                  className={
                    touched.name && errors.name ? s.inputErrorName : s.inputName
                  }
                  placeholder={
                    touched.name && errors.name ? errors.name : 'Name'
                  }
                  autoComplete={'off'}
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <svg className={s.iconForm} width="24px" height="24px">
                  <use className={s.iconUse} href={sprite + '#icon-name'}></use>
                </svg>
              </div>
            </label>

            <Button
              children={'SING UP'}
              type={'submit'}
              onClick={handleSubmit}
              disabled={!isValid && !dirty}
              style={buttonS}
            />

            <Link to="/login" className={s.link}>
              LOG IN
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
}
