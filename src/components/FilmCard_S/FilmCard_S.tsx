import { Group, Image, Paper, Stack, Title } from "@mantine/core";
import star from '~assets/star.svg';
import styles from './styles.module.scss';

export const FilmCard_S: React.FC = () => {
  return (
    <Paper className={styles.card}>
      <Group gap={16}>
        <Image src={'#'} h={170} w={119} />
        <Stack justify="space-between">
          <div>
            <Title order={3}>qweqweqwe</Title>
            <Title order={3}>qweqweqwe</Title>
            <Title order={3}>qweqweqwe</Title>
            <Title order={3}>qweqweqwe</Title>
          </div>
          <div>
            Genres: lokrdnvlkrnvlkjrnljkerlvjknerkljv
          </div>
        </Stack>
      </Group>
      <img src={star} />
    </Paper>
  )
}