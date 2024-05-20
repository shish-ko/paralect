import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import styles from './styles.module.scss';
import poster from '~assets/poster.png';
import { Star } from "~comps/UI_components/Star/Star";
import { RateModal } from "~comps/RateModal/RateModal";
import { useState } from "react";
import { IFilmData_L, IFilmData_S } from "interfaces";

type IFilmCardProps = (IFilmData_S & { isBig: false}) | (IFilmData_L & { isBig: true} )

export const FilmCard_S: React.FC<IFilmCardProps> = (props) => {
  const [isRateActive, setIsRateActive] = useState(false);

  return (
    <Paper className={styles.card} radius={12}>
      <Group align="stretch" wrap="nowrap">
        <Image src={poster} h={props.isBig ? 352 : 170} w={props.isBig ? 250 : 119} mr={16} />
        <Stack justify="space-between" className={styles.titleContainer}>
          <Group justify="space-between" align='flex-start' gap={8} wrap="nowrap">
            <div className={styles.filmInfo}>
              <Title order={3} c='purple.5'>{props.original_title}</Title>
              <Text c='gray.6' my={8}>{props.release_date}</Text>
              <Group gap={0}>
                <Star isOrange={true} isNotActive={true} />
                <Text span fw={600} ml={4}>{props.original_title}</Text>
                <Text span c='gray.6' ml={8}>({props.vote_count})</Text>
              </Group>
            </div>
            <Star onClick={()=>setIsRateActive(true)}/>
          </Group>
          {props.isBig ?
            <div className={styles.fullInfoContainer}>
              <Text c='gray.6'>Duration</Text><Text>{props.runtime}</Text>
              <Text c='gray.6'>Premiere</Text><Text>{props.release_date}</Text>
              <Text c='gray.6'>Budget</Text><Text>{props.budget}</Text>
              <Text c='gray.6'>Gross worldwide</Text><Text>{props.revenue}</Text>
              <Text c='gray.6'>Genres</Text><Text>{props.genres.map(g=>g.name).join(', ')}</Text>
            </div>
            :
            <div>
              <Text span c='gray.6'>Genres: </Text>
            </div>
          }
        </Stack>
      </Group>
      <RateModal isOpen={isRateActive} filmTitle={props.original_title} closeHandler={()=>setIsRateActive(false)} filmId={props.id}/>
    </Paper>
  );
};
