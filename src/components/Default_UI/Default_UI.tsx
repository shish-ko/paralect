import styles from './styles.module.scss';
import React from "react";
import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import { Navbar } from "~comps/Navbar/Navbar";

export const Default_UI: React.FC = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  );
};
