import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { sessionSelectors } from '../../redux/session';
import { openModalLogOut } from '../../redux/global/globalActions';
import { fetchCurrentUser } from '../../redux/session/sessionOperations';
import sprite from '../../images/svg_sprite.svg';
import style from './Header.module.css';
import ModalLogout from '../ModalLogout/ModalLogout';
import { NavLink } from 'react-router-dom';
import path from '../../routes_path';

function useTableScreen() {
  const [tableScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tableScreen]);

  return Number(tableScreen);
}

const Header = () => {
  const [Loaded, setLoaded] = useState();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const name = useSelector(sessionSelectors.getUsername);
  const dispatch = useDispatch();

  const tableScreen = useTableScreen();

  return (
    <CSSTransition
      in={Loaded}
      timeout={500}
      classNames={{
        enterActive: `${style.headerShow}`,
      }}
      mountOnEnter
    >
      <header className={style.header}>
        <div className={style.header__container}>
          <NavLink className={style.logoName} to={path.dashboardPage}>
            <svg className={style.headerIconLogo} width="40px" height="40px">
              <use href={sprite + '#icon-wallet'}></use>
            </svg>
            Wallet
          </NavLink>
          <div className={style.headerExit}>
            <span className={style.userName}>{name}</span>
            {Number(tableScreen) >= 768 && <span>|</span>}
            <button
              className={style.headerLogout}
              onClick={() => dispatch(openModalLogOut())}
            >
              <svg className={style.headerIconExit} width="18px" height="18px">
                <use href={sprite + '#icon-exit'}></use>
              </svg>
              {Number(tableScreen) >= 768 && (
                <span className={style.headerExit}>Exit</span>
              )}
            </button>
          </div>
          <ModalLogout />
        </div>
      </header>
    </CSSTransition>
  );
};

export default Header;
