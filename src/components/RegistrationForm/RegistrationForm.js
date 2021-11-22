import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionOperations from '../../redux/session/sessionOperations';
import sprite from '../../images/svg_sprite.svg';
import s from './RegistrationForm.module.css';
import Button from '../Button/Button';

const RegistrationForm = () => {
  const button = {
    marginBottom: 20,
    height: 50,
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .typeError('Должна быть строка !')
        .email('Enter a valid email')
        .required('Enter your Email'),
      name: Yup.string()
        .typeError('Должна быть строка !')
        .required('Enter your name'),
      password: Yup.string()
        .typeError('Должна быть строка !')
        .required('Enter your password')
        .min(6, 'Your password must be longer than 6 characters.')
        .max(12, 'Your password must be no longer than 12 characters.'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Enter your password'),
    }),
    onSubmit: values => {
      let name = values.name;
      let password = values.password;
      let email = values.email;

      dispatch(sessionOperations.register({ name, password, email }));
    },
  });

  return (
    <div className={s.formContainer}>
      <div className={s.titleWallet}>
        <svg className={s.walletIcon} width="30px" height="30px">
          <use href={sprite + '#icon-wallet'}></use>
        </svg>
        <h2 className={s.title}>Wallet</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <div className={s.inputBase}>
          {formik.touched.email && formik.errors.email ? (
            <div className={s.error}>{formik.errors.email}</div>
          ) : null}
          <label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                formik.touched.email && formik.errors.email
                  ? s.inputError
                  : s.input
              }
            />
          </label>

          <svg className={s.iconForm} width="24px" height="24px">
            <use href={sprite + '#icon-email'}></use>
          </svg>
        </div>

        <div className={s.inputBase}>
          <label></label>
          {formik.touched.password && formik.errors.password ? (
            <div className={s.error}>{formik.errors.password}</div>
          ) : null}
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password
                ? s.inputError
                : s.input
            }
            placeholder="Password"
          />
          <svg className={s.iconForm} width="24px" height="24px">
            <use className={s.iconUse} href={sprite + '#icon-password'}></use>
          </svg>
        </div>

        <div className={s.inputBase}>
          <label></label>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={s.error}>{formik.errors.confirmPassword}</div>
          ) : null}
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? s.inputError
                : s.input
            }
            placeholder="Set password"
          />
          <svg className={s.iconForm} width="24px" height="24px">
            <use className={s.iconUse} href={sprite + '#icon-password'}></use>
          </svg>
        </div>

        <div className={s.inputBase}>
          <label></label>
          {formik.touched.name && formik.errors.name ? (
            <div className={s.error}>{formik.errors.name}</div>
          ) : null}
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.name && formik.errors.name
                ? s.inputErrorName
                : s.inputName
            }
            value={formik.values.name}
            placeholder="Name"
          />
          <svg className={s.iconForm} width="24px" height="24px">
            <use className={s.iconUse} href={sprite + '#icon-name'}></use>
          </svg>
        </div>
        <Button type="submit" children={'SING UP'} style={button}></Button>
        <Link to="/login" className={s.link}>
          LOG IN
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
