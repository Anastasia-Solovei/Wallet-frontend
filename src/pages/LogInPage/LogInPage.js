import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/sessionSelectors';

import s from './LogInPage.module.css';
import LogInForm from '../../components/LogInForm/LogInForm';
import path from '../../routes_path';
import Money from '../../components/Money/Money';
import AuthContainer from '../../components/AuthContainer/AuthContainer';

import ImgContainer from '../../components/ImgContainer/ImgContainer';

const LogInPage = () => {
  const isAuth = useSelector(sessionSelectors.getIsAuth);

  if (isAuth) {
    return <Redirect to={path.dashboardPage} />;
  }

  return (
    <>
      <AuthContainer>
        <Money />
        <ImgContainer>
          <div className={s.frameimg}></div>
          <h1 className={s.title}>Finance App</h1>
        </ImgContainer>
        <div className={s.formContainer}>
          <LogInForm />
        </div>
      </AuthContainer>
    </>
  );
};

export default LogInPage;
//<div className={s.logInPageBlur}></div>
//   <div className={s.logInPage}>
//
// <div className={s.imgContent}>
// <div className={s.img}></div>
//<h1 className={s.pageHeading}>Finance App</h1>
//  </div>
//<div className={s.logInFormUnderlay}>
//<LogInForm />
// </div>
// </div>
