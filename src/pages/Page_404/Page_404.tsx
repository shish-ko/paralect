import { Box, Button, Center, Image, Title } from "@mantine/core";
import error_ph from '~assets/404.png';
import styles from './404.module.scss';
import { Link } from "react-router-dom";

export const Page_404: React.FC = () => {
  return (
    <Center classNames={styles}>
      <Box>
        <Image src={error_ph} mb={48} />
      </Box>
      <Title order={3} mb={16}>We can’t find the page you are looking for</Title>
      <Button component={Link} to={'/'} c={'white'}>Go Home</Button>
    </Center>
  );
};
