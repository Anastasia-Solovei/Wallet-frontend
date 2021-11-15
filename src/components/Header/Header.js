import { useDispatch, useSelector } from 'react-redux';
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={style.header__inner}>
        <div>
          <svg class="logo" height="20" width="20">
            <use href="../images/svg_sprite#icon-wallet"></use>
          </svg>
          <span className={style.logoName}>Wallet</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
