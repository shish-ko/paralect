import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import styles from './styles.module.scss';
import noImage_S from '~assets/no_image_S.png';
import noImage_L from '~assets/no_image_L.png';
import { StarRate } from "~comps/UI_components/Star/StarRate";
import { RateModal } from "~comps/RateModal/RateModal";
import { useState } from "react";
import { IFilmData_L, IFilmData_S, IGenre, IUserRates } from "interfaces";
import { MEDIA_URL } from "constants";
import { Link, useRouteLoaderData } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";

type IFilmCardProps = (IFilmData_S & { isBig: false }) | (IFilmData_L & { isBig: true })

export const FilmCard_S: React.FC<IFilmCardProps> = (props) => {
  const genresList = useRouteLoaderData('root') as IGenre[];
  const [isRateActive, setIsRateActive] = useState(false);
  const [ratings] = useLocalStorage<IUserRates[]>({ key: 'userRatings', defaultValue: [] });
  const personalRate = ratings.find((r) => r.filmId === props.id)?.rate;

  return (
    <>
      <Paper className={styles.card} radius={12} component={Link} to={`movie/${props.id}`}>
        <Group align="stretch" wrap="nowrap">
          <Image src={MEDIA_URL + props.poster_path} h={props.isBig ? 352 : 170} w={props.isBig ? 250 : 119} mr={16} fallbackSrc={props.isBig ? noImage_L : noImage_S} />
          <Stack justify="space-between" className={styles.titleContainer}>
            <Group justify="space-between" align='flex-start' gap={8} wrap="nowrap">
              <div className={styles.filmInfo}>
                <Title order={3} c='purple.5'>{props.original_title}</Title>
                <Text c='gray.6' my={8}>{new Date(props.release_date).getFullYear()}</Text>
                <StarRate vote_count={props.vote_count} rating={props.vote_average.toFixed(2)} />
              </div>
              <StarRate clickHandler={() => setIsRateActive(true)} rating={personalRate} />
            </Group>
            {props.isBig ?
              <div className={styles.fullInfoContainer}>
                <Text c='gray.6'>Duration</Text><Text>{props.runtime}</Text>
                <Text c='gray.6'>Premiere</Text><Text>{props.release_date}</Text>
                <Text c='gray.6'>Budget</Text><Text>{props.budget}</Text>
                <Text c='gray.6'>Gross worldwide</Text><Text>{props.revenue}</Text>
                <Text c='gray.6'>Genres</Text><Text>{props.genres.map(g => g.name).join(', ')}</Text>
              </div>
              :
              <div>
                <Text span c='gray.6'>Genres: </Text>
                <Text span>{props.genre_ids.map(id => genresList.find(genre => genre.id === id)?.name).join(', ')}</Text>
              </div>
            }
          </Stack>
        </Group>
      </Paper>
      <RateModal isOpen={isRateActive} filmTitle={props.original_title} closeHandler={() => setIsRateActive(false)} filmId={props.id} />
    </>
  );
};
