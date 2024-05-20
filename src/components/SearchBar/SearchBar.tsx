import { Button, Grid, Group, NumberInput, Stack, TextInput, Title } from "@mantine/core";
import SearchIcon from '~assets/search.svg?react';
import styles from './styles.module.scss';
import { AppSelect } from "~comps/UI_components/AppSelect/AppSelect";
import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IGenre } from "interfaces";

export const SearchBar: React.FC = () => {
  const genresList = useRouteLoaderData('root') as IGenre[];
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
      <Stack mb={24} gap={24}>
        <Grid align="end" py={0}>
          <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
            <AppSelect size="lg" placeholder="Select genre" data={genresList.map((g)=>g.name)} value={genres} setValue={setGenres} label='Genres' />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
            <AppSelect placeholder="Select release year" data={['React', 'Angular', 'Svelte', 'Vue']} value={releaseYears} setValue={setReleaseYears} label='Release year' />            
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 'content', lg: 'auto' }}>
            <Group gap={8} align="flex-end" wrap="nowrap">
            <NumberInput placeholder="From" label='Ratings' min={0} max={10} w={138} decimalScale={2} step={0.1} rightSectionWidth={36}/>
            <NumberInput placeholder="To" min={0} max={10} w={138} decimalScale={2} step={0.1} rightSectionWidth={36}/>

            </Group>
          </Grid.Col>
          <Grid.Col span={'content'}>
            <Button variant="transparent" disabled px={0}>Reset filters</Button>
          </Grid.Col>
        </Grid>
        <Group justify="right">
          <AppSelect placeholder="Sort by" data={['React', 'Angular', 'Svelte', 'Vue']} value={releaseYears} setValue={setReleaseYears} label='Sort by' w={284}/>            
          
        </Group>
      </Stack>

    </>
  );
};
