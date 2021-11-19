import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import sprite from '../../images/svg_sprite.svg';
import authOperations from '../../redux/session/sessionOperations';
import { useDispatch } from 'react-redux';

export default function RegistrationForm() {
  // const validationSchema = yup.object().shape({
  //   email: yup
  //     .string()
  //     .typeError('Должна быть строка !')
  //     .required('Enter your Email'),
  //   // .matches('!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i'),

  //   name: yup
  //     .string()
  //     .typeError('Должна быть строка !')
  //     .required('Enter your name'),
  //   password: yup
  //     .string()
  //     .typeError('Должна быть строка !')
  //     .required('Enter your password')
  //     .min(6, 'Your password must be longer than 6 characters.')
  //     .max(12, 'Your password must be no longer than 12 characters.'),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref('password')], 'Passwords must match')
  //     .required('Enter your password'),
  // });

  const buttonS = {
    marginBottom: 20,
  };
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  console.log(password);

  const inputFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);

    console.log(password);
    console.log(name);
    console.log(email);
    dispatch(authOperations.register({ name, password, email }));

    // setName('');
    // setPassword('');
    // setConfirmPassword('');
    // setEmail('');
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
        //validationSchema={validationSchema}
        // validateOnBlur
        onSubmit={inputFormSubmit}
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
                    touched.email &&
                    //errors.email ? s.inputError :
                    s.input
                  }
                  placeholder={
                    touched.email &&
                    //errors.email ? errors.email :
                    'E-mail'
                  }
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
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
                    touched.password &&
                    //errors.password ? s.inputError :
                    s.input
                  }
                  placeholder={
                    touched.password &&
                    //errors.password
                    // ? errors.password
                    // :
                    'Password'
                  }
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={password}
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
                    touched.confirmPassword &&
                    //errors.confirmPassword
                    // ? s.inputError
                    // :
                    s.input
                  }
                  placeholder={
                    touched.confirmPassword &&
                    //errors.confirmPassword
                    // ? errors.confirmPassword
                    // :
                    'Set password'
                  }
                  autoComplete={'off'}
                  type={'password'}
                  name={'confirmPassword'}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={confirmPassword}
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
                    touched.name &&
                    //errors.name ? s.inputErrorName :
                    s.inputName
                  }
                  placeholder={
                    touched.name &&
                    //errors.name ? errors.name :
                    'Name'
                  }
                  autoComplete="off"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={name}
                />
                <svg className={s.iconForm} width="24px" height="24px">
                  <use className={s.iconUse} href={sprite + '#icon-name'}></use>
                </svg>
              </div>
            </label>

            <Button
              children={'SING UP'}
              type="submit"
              onClick={inputFormSubmit}
              // disabled={!isValid && !dirty}
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
