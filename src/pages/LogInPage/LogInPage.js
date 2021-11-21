import React from 'react';

import s from './LogInPage.module.css';
import LogInForm from '../../components/LogInForm/LogInForm';

const LogInPage = () => {
  return (
    <>
      <div className={s.logInPageBlur}></div>
      <div className={s.logInPage}>
        <div className={s.imgContent}>
          <div className={s.img}></div>
          <h1 className={s.pageHeading}>Finance App</h1>
        </div>
        <div className={s.logInFormUnderlay}>
          <LogInForm />
        </div>
      </div>
    </>
  );
};

export default LogInPage;
