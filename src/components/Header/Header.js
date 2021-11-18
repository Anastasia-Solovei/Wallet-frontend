import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { sessionSelectors } from '../../redux/session';
import { setExitModalOpen } from '../../redux/global/globalOperations';
import sprite from '../../images/svg_sprite.svg';
import style from './Header.module.css';

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
  const name = useSelector(sessionSelectors.getUsername);
  const dispatch = useDispatch();
  const tableScreen = useTableScreen();

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.headerLogo}>
          <svg className={style.headerIconLogo} width="30px" height="30px">
            <use href={sprite + '#icon-wallet'}></use>
          </svg>
          <span className={style.logoName}>Wallet</span>
        </div>
        <div className={style.headerExit}>
          <span className={style.userName}>{name}</span>
          {Number(tableScreen) >= 768 && <span>|</span>}
          <button
            className={style.headerLogout}
            // onClick={e => dispatch(setExitModalOpen())}
          >
            <svg className={style.headerIconExit} width="18px" height="18px">
              <use href={sprite + '#icon-exit'}></use>
            </svg>
            {Number(tableScreen) >= 768 && (
              <span className={style.headerExit}>Exit</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
