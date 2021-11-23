import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import FormContainer from '../../components/FormContainer/FormContainer';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/sessionSelectors';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';
import path from '../../routes_path';

const RegistrationPage = () => {
  const isSignedUp = useSelector(sessionSelectors.getUsername);

  if (isSignedUp) {
    return <Redirect to={path.logInPage} />;
  }

  return (
    <AuthContainer>
      <ImgContainer>
        <div className={s.frameimg}></div>
        <h1 className={s.title}>Finance App</h1>
      </ImgContainer>
      <FormContainer>
        <RegistrationForm />
      </FormContainer>
    </AuthContainer>
  );
};

export default RegistrationPage;
