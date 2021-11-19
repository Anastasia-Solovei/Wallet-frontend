import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import s from './ModalLogout.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function ModalLogout() {
  const dispatch = useDispatch();

  return createPortal(
    <div className={s.modalBackdrop}>
      <div className={s.modalContent}>
        <p>Are you sure you want to exit?</p>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
