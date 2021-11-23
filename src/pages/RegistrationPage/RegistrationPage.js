import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
  const [Loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (isSignedUp) {
    return <Redirect to={path.logInPage} />;
  }

  return (
    <AuthContainer>
      <CSSTransition
        in={Loaded}
        timeout={500}
        classNames={{
          enterActive: `${s.registrationPageImgShow}`,
        }}
        mountOnEnter
      >
        <ImgContainer>
          <div className={s.frameimg}></div>
          <h1 className={s.title}>Finance App</h1>
        </ImgContainer>
      </CSSTransition>
      <CSSTransition
        in={Loaded}
        timeout={500}
        classNames={{
          enterActive: `${s.registrationPageShow}`,
        }}
        mountOnEnter
      >
        <FormContainer>
          <RegistrationForm />
        </FormContainer>
      </CSSTransition>
    </AuthContainer>
  );
};

export default RegistrationPage;
