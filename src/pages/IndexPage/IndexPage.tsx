import { useState } from 'react';
import style from './styles.module.scss';
import { FilmList } from "~comps/FilmList/FilmList";
import { SearchBar } from "~comps/SearchBar/SearchBar";
import { IFilmsSearchRes } from 'interfaces';
import { Center, Group, Loader, Pagination } from '@mantine/core';

export const IndexPage = () => {
  const [filmsToDisplay, setFilmsToDisplay] = useState<IFilmsSearchRes>();
  const [page, setPage] = useState(1);

  return (
    <div className={style.main}>
      <SearchBar searchHandler={setFilmsToDisplay} page={page} pageSetter={setPage} />
      {!filmsToDisplay
        ? <Center><Loader /></Center>
        : <FilmList filmList={filmsToDisplay.results}
        />}
      <Group justify='flex-end' mt={24}>
        {(filmsToDisplay
          && Number(filmsToDisplay?.total_pages) - 1)
          && <Pagination siblings={1} total={filmsToDisplay.total_pages}
            value={filmsToDisplay.page} boundaries={0} classNames={style}
            onChange={setPage} />
        }
      </Group>
    </div>
  );
};
