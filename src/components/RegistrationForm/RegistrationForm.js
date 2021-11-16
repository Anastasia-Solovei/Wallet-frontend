import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import s from './RegistrationForm.module.css';
import Button from '../Button/Button';

// import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
// import { } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { red } from '@mui/material/colors';
// import InputAdornment from '@mui/material/InputAdornment';

export default function RegistrationFprm() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Это поле обязательно'),

    name: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Это поле обязательно'),
    password: yup
      .string()
      .typeError('Должна быть строка !')
      .required('Это поле обязательно'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают !')
      .required('Это поле обязательно'),
  });

  const buttonS = {
    marginBottom: 20,
  };
  const buttonL = {
    backgroundColor: 'transparent',
    color: '#4A56E2',
    border: '1px solid #4A56E2',
  };

  return (
    <div className="App">
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
          <div className={s.formContainer}>
            <div>
              <FormControl variant="standard" className={s.form}>
                <InputLabel htmlFor="email" className={s.label}>
                  <EmailIcon className={s.icon} color="disabled" />
                  E-mail
                </InputLabel>
                <Input
                  autoComplete={'off'}
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={s.input}
                />
              </FormControl>
            </div>

            <div>
              <FormControl className={s.form} variant="standard">
                <InputLabel htmlFor={'password'} className={s.label}>
                  <LockIcon className={s.icon} color="disabled" />
                  Password
                </InputLabel>
                <Input
                  autoComplete={'off'}
                  type={'password'}
                  name={'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={s.input}
                />
              </FormControl>
            </div>

            {touched.password && errors.password && (
              <p style={{ color: 'red' }}>{errors.password}</p>
            )}

            <div>
              <FormControl className={s.form} variant="standard">
                <InputLabel htmlFor={'confirmPassword'} className={s.label}>
                  <LockIcon className={s.icon} color="disabled" /> Confirm
                  Password
                </InputLabel>
                <Input
                  autoComplete={'off'}
                  type={'password'}
                  name={'confirmPassword'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className={s.input}
                />
              </FormControl>
            </div>

            {touched.confirmPassword && errors.confirmPassword && (
              <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
            )}

            <div>
              <FormControl className={s.form} variant="standard">
                <InputLabel htmlFor={'name'} className={s.label}>
                  <AccountBoxIcon className={s.iconName} color="disabled" />
                  Name
                </InputLabel>
                <Input
                  autoComplete={'off'}
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={s.input}
                />
              </FormControl>
            </div>

            {touched.name && errors.name && (
              <p style={{ color: 'red' }}>{errors.name}</p>
            )}

            <Button
              children={'Sign up'}
              type={'submit'}
              onClick={handleSubmit}
              disabled={!isValid && !dirty}
              style={buttonS}
            />

            <Button
              children={'Log in'}
              type={'submit'}
              onClick={handleSubmit}
              disabled={!isValid && !dirty}
              style={buttonL}
            />
          </div>
        )}
      </Formik>
    </div>
  );
}
