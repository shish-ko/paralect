import { FilmCard_S } from '~comps/FilmCard_S/FilmCard_S';
import styles from './styles.module.scss';

export const FilmList: React.FC =()=> {
  return (
    <div className={styles.filmContainer}>
      <FilmCard_S/>
      <FilmCard_S/>
      <FilmCard_S/>
      <FilmCard_S/>
      <FilmCard_S/>
      <FilmCard_S/>
      <FilmCard_S/>
    </div>
  );
};
