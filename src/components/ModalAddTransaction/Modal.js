import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
        document.body.style.overflow = 'unset';
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        onClose();
        document.body.style.overflow = 'unset';
      }
    },
    [onClose],
  );

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
}
