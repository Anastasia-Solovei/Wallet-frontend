import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/svg_sprite.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={style.header__inner}>
        <div className={style.headerLogo}>
          <svg className={style.headerIconLogo} width="30px" height="30px">
            <use href={sprite + '#icon-wallet'}></use>
          </svg>
          <span className={style.logoName}>Wallet</span>
        </div>
        <div className={style.headerExit}>
          <span className={style.userName}>Name</span>

          {/* <span>|</span> */}
          <button className={style.headerLogout}>
            <svg className={style.headerIconExit} width="18px" height="18px">
              <use href={sprite + '#icon-exit'}></use>
            </svg>

            {/* <span className={style.headerExit}>Exit</span> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
