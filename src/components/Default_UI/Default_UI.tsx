import { Container, Flex, Group, Stack, Title } from "@mantine/core";
import styles from './styles.module.scss';
import React from "react";
import { Link, Outlet } from "react-router-dom";
import '@mantine/core/styles.css';
import { Navbar } from "~comps/Navbar/Navbar";

export const Default_UI: React.FC = () => {
  return (
    <Container className={styles.app}>
      <Navbar />
      
        <Stack>
          <Title order={2}>Movies</Title>
          <Link to={''}>Hello</Link>
          <Link to={''}>Hello</Link>
        </Stack>
      <Outlet />

    </Container>
  );
};
