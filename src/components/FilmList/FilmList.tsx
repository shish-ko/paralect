import { FilmCard_S } from '~comps/FilmCard_S/FilmCard_S';
import styles from './styles.module.scss';
import { IFilmData_S } from 'interfaces';
import { Box, Center, Image, Title } from '@mantine/core';
import no_res_ph from '~assets/no_search_results_ph.png';

interface IFilmListProps {
  filmList: IFilmData_S[]
}
export const FilmList: React.FC<IFilmListProps> = ({ filmList }) => {

  return (
    filmList.length
      ? (
        <div className={styles.filmContainer}>
          {filmList.map((filmData) => <FilmCard_S {...filmData} isBig={false} key={filmData.id} />)}
        </div>
      )
      : (
        <Center style={{ flexDirection: 'column', gap: '16px'}}>
          <Box>

            <Image src={no_res_ph} />
          </Box>
          <Title order={3}>We don't have such movies, look for another one</Title>
        </Center>
      )
  );
};
