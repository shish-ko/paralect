import { Anchor, Breadcrumbs, Stack } from "@mantine/core";
import { IFilmData_L} from "interfaces";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { FilmCard_S } from "~comps/FilmCard_S/FilmCard_S";
import { FilmDetails } from "~comps/FilmDetails/FilmDetails";
import styles from './movie.module.scss';
import { server } from "axiosConfig";


export const Movie: React.FC = () => {
  const movieProps = useLoaderData() as IFilmData_L;
  return (
    <Stack bg={'gray.1'} px={180} py={40} flex={1}>
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
  const res = await server.get(`movie/${args.params.id}`, {params: {append_to_response: 'videos'}});
  console.log(res.data);
  return res.data;
};
