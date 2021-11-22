import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from './Modal';

import { logOut } from '../../redux/session/sessionOperations';
import { closeModalLogOut } from '../../redux/global/globalActions';
import { getIsExitModalOpen } from '../../redux/global/globalSelectors';

import s from './ModalLogout.module.css';

export default function ModalLogout() {
  const dispatch = useDispatch();

  const isLogoutModalOpen = useSelector(getIsExitModalOpen);
  const onModalLogout = useCallback(() => {
    dispatch(logOut());
    dispatch(closeModalLogOut());
  }, [dispatch]);

  return (
    <>
      {isLogoutModalOpen && (
        <Modal className={s.modalLogout} closeModal={() => dispatch(closeModalLogOut())}>
          <p className={s.question_text}>Are you sure you want to log out?</p>
          <div>
          <button className={s.button1} onClick={() => dispatch(closeModalLogOut())}>Stay</button>
            <button className={s.button2} onClick={() => onModalLogout()}>Log out</button>
          </div>
        </Modal>
      )}
    </>
  );
}
