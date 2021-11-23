import s from './AuthContainer.module.css';

const Container = ({ children }) => (
  <div className={s.authSection}>
    <div className={s.container}>{children} </div>
  </div>
);

export default Container;
