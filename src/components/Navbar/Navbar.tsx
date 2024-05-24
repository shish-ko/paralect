import { Tabs, Title } from "@mantine/core";
import AppLogo from '~assets/logo.svg';
import styles from './styles.module.scss';
import { useLocation, useNavigate } from "react-router-dom";
import { appPaths } from "interfaces";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className={styles.navBar}>
      <Title order={1} className={styles.logo} style={{zIndex:3, position: 'relative'}}>
        <img src={AppLogo} />
        <span>ArrowFlicks</span>
      </Title>
      <Tabs
        defaultValue={location.pathname}
        orientation="vertical"
        variant="unstyled"
        classNames={styles}
        onChange={(value) => value && navigate(value  )}>
        <Tabs.List>
          {
            Object.keys(appPaths).map(path => <Tabs.Tab value={path} key={path}>{appPaths[path as keyof typeof appPaths]}</Tabs.Tab>)
          }
        </Tabs.List>
      </Tabs>
    </nav>
  );
};
