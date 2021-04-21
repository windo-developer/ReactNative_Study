import axios from "axios";

const TMDB_KEY = "YOUR_API_KEY";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`, { append_to_response: "videos" }),
};

export const getApiImage = (
  path,
  defaultPoster = "https://images.unsplash.com/photo-1472847720459-21ede812f22a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
) => (path ? `https://image.tmdb.org/t/p/original/${path}` : defaultPoster);
