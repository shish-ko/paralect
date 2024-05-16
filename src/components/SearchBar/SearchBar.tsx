import { Button, Grid, Group, NativeSelect, Stack, TextInput, Title, rem } from "@mantine/core";
import SearchIcon from '~assets/search.svg?react';
import styles from './styles.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <>
      <Group justify="space-between" mb={40}>
        <Title order={2}>Movies</Title>
        <TextInput
          classNames={styles}
          rightSection={<Button size="xs">Search</Button>}
          leftSection={<SearchIcon />}
          placeholder="Search movie title"
          rightSectionWidth={109}
          leftSectionWidth={40}
          size="lg"
        />
      </Group>
      <Stack>
        <Grid>
          <Grid.Col span={3}>
            <NativeSelect
              label='Genres'
            >
              <option value="vue" disabled>Vue</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              
              </NativeSelect>
          </Grid.Col>
          <Grid.Col span={3}>qweqweqweqweqwe</Grid.Col>
          <Grid.Col span={3}>qweqweqweqweqwe</Grid.Col>
          <Grid.Col span={3}>qweqweqweqweqwe</Grid.Col>
        </Grid>
      </Stack>

    </>
  );
};
