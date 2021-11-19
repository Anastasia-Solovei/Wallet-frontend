import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ButtonModalClose from '../../components/ModalAddTransaction/ButtonModalClose';
import FormAddTransactions from '../../components/FormAddTransactions';
import s from './ModalAddTransaction.module.css';

const modalRoot = document.querySelector('#modal-root');

// быстрые стили для заголовка модалки
const modalTitleStyles = {
  marginTop: '0',
  marginBottom: '40px',
  textAlign: 'center',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '30px',
};

export default function ModalAddTransaction({ onClose }) {
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

  return createPortal(
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <ButtonModalClose onClose={onClose} />
        <p style={{ ...modalTitleStyles }}>Add a transaction </p>
        <FormAddTransactions onClose={onClose} />
      </div>
    </div>,
    modalRoot,
  );
}
