import { useDispatch, useSelector } from 'react-redux';
import Modal from '../ModalLogout/Modal';
import ButtonModalClose from '../../components/ModalAddTransaction/ButtonModalClose';
import FormAddTransactions from '../../components/FormAddTransactions';
import { closeModalAddTransaction } from '../../redux/global/globalActions';
import { getIsTransactionModalOpen } from '../../redux/global/globalSelectors';

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

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const isTransactionModalOpen = useSelector(getIsTransactionModalOpen);

  return (
    <>
      {isTransactionModalOpen && (
        <Modal closeModal={() => dispatch(closeModalAddTransaction())}>
          <ButtonModalClose
            onClose={() => dispatch(closeModalAddTransaction())}
          />
          <p style={{ ...modalTitleStyles }}>Add a transaction </p>
          <FormAddTransactions
            onClose={() => dispatch(closeModalAddTransaction())}
          />
        </Modal>
      )}
    </>
  );
}
