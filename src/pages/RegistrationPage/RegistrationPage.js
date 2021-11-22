import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/sessionSelectors';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Container from '../../components/Container/Container';
import s from './RegistrationPage.module.css';
import path from '../../routes_path';

const RegistrationPage = () => {
  const isSignedUp = useSelector(sessionSelectors.getUsername);

  if (isSignedUp) {
    return <Redirect to={path.logInPage} />;
  }

  return (
    <>
      <div className={s.rightContainer}></div>
      <div className={s.registrationPage}>
        <div className={s.img}>
          <div className={s.frameimg}></div>

          <h1 className={s.title}>Finance App</h1>
        </div>

        <div className={s.formBlock}>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
