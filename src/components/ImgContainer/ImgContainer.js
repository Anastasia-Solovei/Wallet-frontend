import s from './ImgContainer.module.css';
const ImgContainer = ({ children }) => (
  <div className={s.container}>{children} </div>
);

export default ImgContainer;
