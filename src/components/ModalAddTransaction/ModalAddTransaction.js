import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import ButtonModalClose from '../../components/ModalAddTransaction/ButtonModalClose';
import FormAddTransactions from '../../components/FormAddTransactions';
import { closeModalAddTransaction } from '../../redux/global/globalActions';
import { getIsTransactionModalOpen } from '../../redux/global/globalSelectors';
import s from './ModalAddTransaction.module.css';

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
          <p className={s.title}>Add a transaction</p>
          <FormAddTransactions
            onClose={() => dispatch(closeModalAddTransaction())}
          />
        </Modal>
      )}
    </>
  );
}
