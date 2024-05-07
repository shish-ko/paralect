import { Container} from "@mantine/core";
import styles from './styles.module.scss';
import React from "react";
import { Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import { Navbar } from "~comps/Navbar/Navbar";

export const Default_UI: React.FC = () => {
  return (
    <Container className={styles.app} size={'xl'}>
      <Navbar />       
      <Outlet />
    </Container>
  );
};
