import styles from './styles.module.scss';
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import { Navbar } from "~comps/Navbar/Navbar";
import { IGenre } from 'interfaces';
import { server } from 'axiosConfig';
import { useAppDispatch } from 'helpers/customHooks';
import { addGenres } from 'store/store';
import { Disclaimer } from '~comps/Disclaimer/Disclaimer';

export const Default_UI: React.FC = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function genresLoader() {
      const { data: { genres } } = await server.get<{ genres: IGenre[] }>('genre/movie/list', { params: { language: 'en' } });
      dispatch(addGenres(genres));
      setIsDisclaimerOpen(false);
    }
    genresLoader();
  }, []);

  return (
    isDisclaimerOpen
      ? <Disclaimer />
      : (
        < div className={styles.app} >
          <Navbar />
          <Outlet />
        </div >
      )
  );
};
