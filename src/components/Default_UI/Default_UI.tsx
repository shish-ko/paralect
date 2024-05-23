import styles from './styles.module.scss';
import React from "react";
import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import { Navbar } from "~comps/Navbar/Navbar";
import { IGenre } from 'interfaces';
import { server } from 'axiosConfig';

export const Default_UI: React.FC = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const loader = async () => {
  const {data: {genres}} = await server.get<{genres: IGenre[]}>('genre/movie/list', {params: {language: 'en'}});
  return genres;
};
