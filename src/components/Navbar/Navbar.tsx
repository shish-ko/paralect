import { Tabs, Title } from "@mantine/core";
import AppLogo from '~assets/logo.svg';
import styles from './styles.module.scss';
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [tab, setTab] = useState<string | null>('movies');

  return (
    <nav className={styles.navBar}>
      <Title order={1} className={styles.logo}>
        <img src={AppLogo}/>
        <span>ArrowFlicks</span>
      </Title>
      <Tabs value={tab} onChange={setTab} orientation="vertical" variant="unstyled" classNames={styles}>
        <Tabs.List>
          <Tabs.Tab value="movies" display={'block'}>Movies</Tabs.Tab>
          <Tabs.Tab value="rated movies">Rated movies</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </nav>
  );
};
