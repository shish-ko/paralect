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
  production_companies: string[],
  videos: string[]
}

interface IGenre {
  id: number,
  name: string,
}


export { appPaths };
export type { IFilmData_S, IFilmData_L, IGenre };
