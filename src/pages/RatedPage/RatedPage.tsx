import { useLocalStorage } from "@mantine/hooks";
import { IUserRates } from "interfaces";
import styles from '../IndexPage/styles.module.scss';
import { FilmList } from "~comps/FilmList/FilmList";
import { Button, Center, Image, Stack, Title } from "@mantine/core";
import placeHolder from '~assets/no_rated_ph.png';
import { Link } from "react-router-dom";

export const RatedPage = () => {
  const [ratings] = useLocalStorage<IUserRates[]>({ key: 'userRatings', defaultValue: [] });

  return (
    ratings.length ?
      (<div className={styles.main}>
        <FilmList filmList={ratings} />
      </div>)
      :
      (
        <Center flex={1}>
          <Stack gap={16} align="center">
            <Image src={placeHolder} />
            <Title order={3} style={{ textAlign: 'center' }}>You haven't rated any films yet</Title>
            <Button component={Link} to={'/'} c={'white'}>Find movies</Button>
          </Stack>
        </Center>
      )
  );
};
