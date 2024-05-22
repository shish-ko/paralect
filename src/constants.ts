const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';
const MEDIA_URL = 'https://image.tmdb.org/t/p/original/';

const SORT_BY = [
  "popularity.asc",
  "popularity.desc",
  "release_date.asc",
  "release_date.desc",
  "revenue.asc",
  "revenue.desc",
  "primary_release_date.asc",
  "primary_release_date.desc",
  "original_title.asc",
  "original_title.desc",
  "vote_average.asc",
  "vote_average.desc",
  "vote_count.asc",
  "vote_count.desc"];
  
export { API_URL, MEDIA_URL, SORT_BY, DISCOVER_URL };
