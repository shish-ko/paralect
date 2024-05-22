import { Anchor, Breadcrumbs, Stack } from "@mantine/core";
import { IFilmData_L} from "interfaces";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { FilmCard_S } from "~comps/FilmCard_S/FilmCard_S"
import { FilmDetails } from "~comps/FilmDetails/FilmDetails";
import styles from './movie.module.scss';


export const Movie: React.FC = () => {
  const movieProps = useLoaderData() as IFilmData_L;
  return (
    <Stack bg={'gray.1'} px={180} py={40}>
      <Breadcrumbs separator={'/'} classNames={styles}>
        <Anchor >
          Movie
        </Anchor>
        <Anchor >
          {movieProps.original_title}
        </Anchor>
      </Breadcrumbs>
      <FilmCard_S {...movieProps} isBig={true} />
      <FilmDetails {...movieProps} />
    </Stack>
  );
};

export const loader: LoaderFunction = async (args) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${args.params.id}?append_to_response=videos`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
      accept: 'application/json',
    }
  });
  const data = await res.json();
  console.log(data)
  return data;
};
