import { useState } from 'react';
import style from './styles.module.scss';
import { FilmList } from "~comps/FilmList/FilmList";
import { SearchBar } from "~comps/SearchBar/SearchBar";
import { IFilmData_S } from 'interfaces';

export const IndexPage = () => {
  const [filmsToDisplay, setFilmsToDisplay] = useState<IFilmData_S[]>();


  return (
    <div className={style.main}>
      <SearchBar />
      <FilmList />
    </div>
  );
};
