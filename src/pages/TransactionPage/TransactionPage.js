import { useState } from 'react';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import ButtonModalClose from '../../components/ModalAddTransaction/ButtonModalClose';
import FormAddTransactions from '../../components/FormAddTransactions';

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

const TransactionPage = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const toggleModal = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  return (
    <>
      {/* Кнопка открытия и модалка, а в ней кнопка закрытия и форма (без роутов) */}
      <ButtonAddTransactions onClick={toggleModal} />

      {isModalAddTransactionOpen && (
        <ModalAddTransaction onClose={toggleModal}>
          <ButtonModalClose onClose={toggleModal} />
          <p style={{ ...modalTitleStyles }}>Add a transaction </p>
          <FormAddTransactions onClose={toggleModal} />
        </ModalAddTransaction>
      )}
    </>
  );
};

export default TransactionPage;
