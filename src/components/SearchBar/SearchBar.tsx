import { Button, Grid, Group, NumberInput, Stack, TextInput, Title } from "@mantine/core";
import SearchIcon from '~assets/search.svg?react';
import styles from './styles.module.scss';
import { AppSelect } from "~comps/UI_components/AppSelect/AppSelect";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { IFilmsSearchRes, IGenre } from "interfaces";
import { SORT_BY } from "constants";
import { apiFetcher } from "utils";

interface ISearchBarProps {
  searchHandler: Dispatch<SetStateAction<IFilmsSearchRes | undefined>>;
  page: number;  // seems to be a bad idea
  pageSetter: Dispatch<SetStateAction<number>>;
}
export const SearchBar: React.FC<ISearchBarProps> = ({ searchHandler, page, pageSetter }) => {
  const genresList = useRouteLoaderData('root') as IGenre[];
  const [query, setQuery] = useState<string>();
  const [genres, setGenres] = useState<string[]>([]);
  const [releaseYear, setReleaseYear] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string[]>([SORT_BY[1]]);
  const [minRate, setMinRate] = useState<string | number>();
  const [maxRate, setMaxRate] = useState<string | number>();
  const genreIds = genres.map((name) => genresList.find((item) => item.name === name)!.id);
  const pageFlag = useRef(false);
  
  const resetHandler = ()=> {
    setGenres([]);
    setMaxRate(undefined);
    setMinRate(undefined);
    setSortBy([SORT_BY[1]]);
    setReleaseYear([]);
    setQuery(undefined);
  };

  async function getMovies() {
    await apiFetcher(
      {
        primary_release_year: releaseYear[0],
        "vote_average.gte": minRate,
        'vote_average.lte': maxRate,
        sort_by: sortBy[0],
        with_genres: genreIds,
        page: 1,
      }, searchHandler);
    pageFlag.current = page === 1;
    pageSetter(1);
  }
  
  useEffect(() => {
    getMovies();
  }, [genres, releaseYear, sortBy, minRate, maxRate]);

  useEffect(() => {
    if (pageFlag.current) {
      apiFetcher(
        {
          primary_release_year: releaseYear[0],
          "vote_average.gte": minRate,
          'vote_average.lte': maxRate,
          sort_by: sortBy[0],
          with_genres: genreIds,
          page,
        }, searchHandler);
    }
    pageFlag.current = true;
  }, [page]);

  const querySearch = () => {
    
  };

  return (
    <>
      <Group justify="space-between" mb={40}>
        <Title order={2}>Movies</Title>
        <TextInput
          classNames={styles}
          rightSection={<Button size="xs" onClick={querySearch}>Search</Button>}
          leftSection={<SearchIcon />}
          placeholder="Search movie title"
          rightSectionWidth={109}
          leftSectionWidth={40}
          size="lg"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
      </Group>
      <Stack mb={24} gap={24}>
        <Grid align="end" py={0}>
          <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
            <AppSelect size="lg" placeholder="Select genre" data={genresList.map((g) => g.name)} value={genres} setValue={setGenres} label='Genres' multiSelect />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 'auto' }}>
            <AppSelect placeholder="Select release year" data={Array(70).fill(undefined).map((_, i) => (new Date().getFullYear() - i).toString())} value={releaseYear} setValue={setReleaseYear} label='Release year' />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 'content', lg: 'auto' }}>
            <Group gap={8} align="flex-end" wrap="nowrap">
              <NumberInput placeholder="From" label='Ratings' min={0} max={10} w={138} decimalScale={2} step={0.1} rightSectionWidth={36} value={minRate} onChange={(v) => setMinRate(v)} />
              <NumberInput placeholder="To" min={0} max={10} w={138} decimalScale={2} step={0.1} rightSectionWidth={36} value={maxRate} onChange={(v) => setMaxRate(v)} />

            </Group>
          </Grid.Col>
          <Grid.Col span={'content'}>
            <Button variant="transparent" px={0} onClick={resetHandler}>Reset filters</Button>
          </Grid.Col>
        </Grid>
        <Group justify="right">
          <AppSelect placeholder="Sort by" data={SORT_BY} value={sortBy} setValue={(v) => setSortBy(v)} label='Sort by' w={284} />

        </Group>
      </Stack>

    </>
  );
};
