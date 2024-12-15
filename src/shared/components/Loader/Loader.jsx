import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '@redux/loading/loadingSelectors';
import s from './Loader.module.scss';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading
    ? createPortal(
        <div className={s.wrapper}>{<h1>Завантажуємо...</h1>}</div>,
        loaderRoot
      )
    : null;
};

export default Loader;
