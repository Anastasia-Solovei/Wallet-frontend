import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import { logOut } from '../../redux/session/sessionOperations'
import { closeModalLogOut } from '../../redux/global/globalActions'

import s from './ModalLogout.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function ModalLogout({onClose}) {
    useEffect(() => {
        const handleKeyDown = e => {
          if (e.code === 'Escape') {
            onClose();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onClose]);
    
      const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      };

  const dispatch = useDispatch();

  const onModalLogout = useCallback(() => {
      dispatch(logOut());
  }, [dispatch]);

  return createPortal(
    <div className={s.modalBackdrop}>
      <div className={s.modalContent}>
        <p>Are you sure you want to exit?</p>
        <div>
          <button onClick={onModalLogout}>Yes</button>
          <button onClick={() => dispatch(closeModalLogOut())}>No</button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
