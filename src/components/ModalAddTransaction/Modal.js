import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeModal();
      }
    },
    [closeModal],
  );

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
}
