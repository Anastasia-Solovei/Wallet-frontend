import React from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './Registration.module.css';

const RegistrationPage = () => {
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
