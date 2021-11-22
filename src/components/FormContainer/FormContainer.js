import s from './FormContainer.module.css';
const FormContainer = ({ children }) => (
  <div className={s.container}>{children} </div>
);

export default FormContainer;
