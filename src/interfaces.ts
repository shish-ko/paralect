enum appPaths {
  '/' = 'Movies',
  '/rated' = 'Rated movies'
}

interface IFilmData_S {
  id: number,
  original_title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  genre_ids: number[]
}

interface IFilmData_L extends IFilmData_S {
  runtime: number,
  budget: number,
  revenue: number,
  genres: { name: string }[],
  overview: string,
  production_companies: {
    "logo_path": string,
    "name": string,
  }[],
  videos: {results: {key: string}[]}
}

interface IGenre {
  id: number,
  name: string,
}

interface IUserRates {
  filmId: number;
  rate: number
}

interface IFilters {
  primary_release_year: string,
  'vote_average.lte': string | number | undefined,
  'vote_average.gte': string | number | undefined,
  sort_by: string,
  page: number,
  with_genres: number[],
}

interface IFilmsSearchRes {
  page: number,
  results: IFilmData_S[],
  total_pages: number,
}

export { appPaths };
export type { IFilmData_S, IFilmData_L, IGenre, IUserRates, IFilters, IFilmsSearchRes };
