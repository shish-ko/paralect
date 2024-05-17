import { Button, Grid, Group, NumberInput, Stack, TextInput, Title } from "@mantine/core";
import SearchIcon from '~assets/search.svg?react';
import styles from './styles.module.scss';
import { AppSelect } from "~comps/UI_components/AppSelect/AppSelect";
import { useState } from "react";

export const SearchBar: React.FC = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [releaseYears, setReleaseYears] = useState<string[]>([]);

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
        <Grid align="end">
          <Grid.Col span={'auto'}>
            <AppSelect placeholder="Select genres" data={['React', 'Angular', 'Svelte', 'Vue']} value={genres} setValue={setGenres} label='Genres' />
          </Grid.Col>
          <Grid.Col span={'auto'}>
            <AppSelect placeholder="Select release year" data={['React', 'Angular', 'Svelte', 'Vue']} value={releaseYears} setValue={setReleaseYears} label='Release year' />            
          </Grid.Col>
          <Grid.Col span={'auto'}>
            <Group justify="space-between" align="flex-end" wrap="nowrap">
            <NumberInput placeholder="From" label='Ratings' min={0} max={10} w={138} decimalScale={2} step={0.1}/>
            <NumberInput placeholder="To" min={0} max={10} w={138} decimalScale={2} step={0.1}/>

            </Group>
          </Grid.Col>
          <Grid.Col span={'content'}>
            <Button variant="white">Reset filters</Button>
          </Grid.Col>
        </Grid>
      </Stack>

    </>
  );
};
