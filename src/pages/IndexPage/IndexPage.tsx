import { FilmCard_S } from "~comps/FilmCard_S/FilmCard_S";
import style from './styles.module.scss';
import { FilmList } from "~comps/FilmList/FilmList";

export const IndexPage = () => {
  return (
    <div className={style.main}>
      <FilmList />
    </div>
  );
};
