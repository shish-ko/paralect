import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import styles from './styles.module.scss';
import poster from '~assets/poster.png';
import { Star } from "~comps/UI_components/Star/Star";

interface IFilmCardProps {
  isBig?: boolean;
}

export const FilmCard_S: React.FC<IFilmCardProps> = ({ isBig }) => {
  return (
    <Paper className={styles.card} radius={12}>
      <Group align="stretch" wrap="nowrap">
        <Image src={poster} h={isBig ? 352 : 170} w={isBig ? 250 : 119} mr={16} />
        <Stack justify="space-between" className={styles.titleContainer}>
          <Group justify="space-between" align='flex-start' gap={8} wrap="nowrap">
            <div className={styles.filmInfo}>
              <Title order={3} c='purple.5'>M - Eine Stadt sucht einen Mörder</Title>
              <Text c='gray.6' my={8}>1999</Text>
              <Group gap={0}>
                <Star isOrange={true} isNotActive={true} />
                <Text span fw={600} ml={4}>9.3 </Text>
                <Text span c='gray.6' ml={8}>(2.9M)</Text>
              </Group>
            </div>
            <Star />
          </Group>
          {isBig ?
            <div className={styles.fullInfoContainer}>
              <Text c='gray.6'>Duration</Text><Text>Genres, asasdasd asd asd asd asd asdasd </Text>
              <Text c='gray.6'>Premiere</Text><Text>qwdwqd </Text>
              <Text c='gray.6'>Budget</Text><Text>qwfqwfqwfqwf ww</Text>
              <Text c='gray.6'>Gross worldwide</Text><Text>qwfqwfqwfqwf ww</Text>
              <Text c='gray.6'>Genres</Text><Text>qwfqwfqwfqwf ww</Text>
            </div>
            :
            <div>
              <Text span c='gray.6'>Genres: </Text>
            </div>
          }
        </Stack>
      </Group>
    </Paper>
  );
};
