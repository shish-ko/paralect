import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { FilmList } from "~comps/FilmList/FilmList";
import { SearchBar } from "~comps/SearchBar/SearchBar";
import { IFilmData_S } from 'interfaces';
import { Center, Loader } from '@mantine/core';
import { API_URL } from 'constants';

export const IndexPage = () => {
  const [filmsToDisplay, setFilmsToDisplay] = useState<IFilmData_S[]>();
  useEffect(() => {
    async function getAllFilms() {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
          accept: 'application/json',
        }
      });
      const data = await res.json();
      console.log(data);
      setFilmsToDisplay(data.results);
    }
    getAllFilms();
  }, []);

  return (
    <div className={style.main}>
      <SearchBar />
      {!filmsToDisplay
        ? <Center><Loader /></Center>
        : <FilmList filmList={filmsToDisplay}
        />}

    </div>
  );
};

export const loader = async () => {
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  });
  const genresList = await res.json();
  return genresList;
};
