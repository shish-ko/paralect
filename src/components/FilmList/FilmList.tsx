import { FilmCard_S } from '~comps/FilmCard_S/FilmCard_S';
import styles from './styles.module.scss';
import { IFilmData_S } from 'interfaces';

interface IFilmListProps {
  filmList: IFilmData_S[]
}
export const FilmList: React.FC<IFilmListProps> =({filmList})=> {

  return (
    <div className={styles.filmContainer}>
      {filmList.map((filmData)=> <FilmCard_S {...filmData}/>)}
    </div>
  );
};
