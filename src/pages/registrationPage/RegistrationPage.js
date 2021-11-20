import React from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import sessionSelectors from '../../redux/session/sessionSelectors';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Container from '../../components/Container/Container';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  // const error = useSelector(sessionSelectors.getError);
  // console.log(error);
  // if (error !== null) {
  //   toast.error(error);
  // }
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
