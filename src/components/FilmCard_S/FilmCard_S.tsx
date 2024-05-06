import { Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import star from '~assets/star.svg';
import styles from './styles.module.scss';
import poster from '~assets/poster.png';

export const FilmCard_S: React.FC = () => {
  return (
    <Paper className={styles.card} radius={12}>
      <Group align="stretch" wrap="nowrap">
        <Image src={poster} h={170} w={119} mr={16} />
        <Stack justify="space-between" className={styles.titleContainer}>
          <Group justify="space-between" align='flex-start' gap={8} wrap="nowrap">
            <div className={styles.filmInfo}>
              <Title order={3} c='purple.5'>qweq qweqwweqweqwe  eq qweqwweqweqw</Title>
              <Text c='gray.6' my={8}>1999</Text>
              <Text span fw={600}>9.3 </Text>
              <Text span c='gray.6'>(2.9M)</Text>
            </div>
            <img src={star} />
          </Group>
          <div>
            <Text span c='gray.6'>Genres: </Text>
          </div>
        </Stack>
      </Group>
    </Paper>
  );
};
