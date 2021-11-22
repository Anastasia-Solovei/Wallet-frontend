import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/sessionSelectors';
import s from './LogInPage.module.css';
import LogInForm from '../../components/LogInForm/LogInForm';
import path from '../../routes_path';

const LogInPage = () => {
  const isAuth = useSelector(sessionSelectors.getIsAuth);

  if (isAuth) {
    return <Redirect to={path.dashboardPage} />;
  }

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
