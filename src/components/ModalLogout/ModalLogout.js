import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './Modal';

import { logOut } from '../../redux/session/sessionOperations';
import { closeModalLogOut } from '../../redux/global/globalActions';

import s from './ModalLogout.module.css';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const onModalLogout = useCallback(() => {
     dispatch(logOut());
  }, [dispatch]);

  return (
    <Modal closeModal={() => dispatch(closeModalLogOut())}>
      <p>Are you sure you want to exit?</p>
      <div>
        <button onClick={onModalLogout}>Yes</button>
        <button onClick={() => dispatch(closeModalLogOut())}>No</button>
      </div>
    </Modal>
  );
}
