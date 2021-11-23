import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/sessionSelectors';
import s from './LogInPage.module.css';
import LogInForm from '../../components/LogInForm/LogInForm';
import path from '../../routes_path';
import Money from '../../components/Money/Money';

const LogInPage = () => {
  const isAuth = useSelector(sessionSelectors.getIsAuth);

  const [Loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (isAuth) {
    return <Redirect to={path.dashboardPage} />;
  }

  return (
    <>
      <div className={s.logInPageBlur}></div>
      <div className={s.logInPage}>
        <Money />
        <CSSTransition
          in={Loaded}
          timeout={500}
          classNames={{
            enterActive: `${s.loginPageImgShow}`,
          }}
          mountOnEnter
        >
          <div className={s.imgContent}>
            <div className={s.img}></div>
            <h1 className={s.pageHeading}>Finance App</h1>
          </div>
        </CSSTransition>
        <CSSTransition
          in={Loaded}
          timeout={500}
          classNames={{
            enterActive: `${s.loginPageShow}`,
          }}
          mountOnEnter
        >
          <div className={s.logInFormUnderlay}>
            <LogInForm />
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default LogInPage;
