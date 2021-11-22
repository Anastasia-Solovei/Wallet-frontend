import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import FormContainer from '../../components/FormContainer/FormContainer';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
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
