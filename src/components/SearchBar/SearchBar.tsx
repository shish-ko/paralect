import { Button, Combobox, Grid, Group, NativeSelect, Select, Stack, TextInput, Title, rem } from "@mantine/core";
import SearchIcon from '~assets/search.svg?react';
import styles from './styles.module.scss';
import { AppSelect } from "~comps/UI_components/AppSelect/AppSelect";
import { useState } from "react";

export const SearchBar: React.FC = () => {
  const [genres, setGenres] = useState<string[]>([]);

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
            {/* <AppSelect
              value={genres}
              onChange={setGenres}
              placeholder="Select genres"
              label='Genres' 
              data={['React', 'Angular', 'Svelte', 'Vue']}
              multiple/> */}
            <AppSelect placeholder="Select genres" data={['React', 'Angular', 'Svelte', 'Vue']} value={genres} setValue={setGenres}/>
          </Grid.Col>
          <Grid.Col span={3}>
            <Combobox></Combobox>
          </Grid.Col>
          <Grid.Col span={3}>qweqweqweqweqwe</Grid.Col>
          <Grid.Col span={3}>qweqweqweqweqwe</Grid.Col>
        </Grid>
      </Stack>

    </>
  );
};
