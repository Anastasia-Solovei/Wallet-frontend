import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from '../../redux/global/globalActions';
import s from './ButtonAddTransactions.module.css';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => dispatch(openModalAddTransaction())}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 0V20" stroke="white" strokeWidth="2" />
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </svg>
    </button>
  );
};

export default ButtonAddTransactions;
