import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';

export const getPopularMovies = () => {
  axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc'
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getUpcomingMovies = () => {
  axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'release_date.desc',
      release_date: {
        lte: '2019'
      }
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getTopRatedMovies = () => {
  axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'vote_average.desc'
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getLatestMovies = () => {
  axios.get(`${baseUrl}/3/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      sort_by: 'popularity.desc'
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getMovieDetails = (id) => {
  axios.get(`${baseUrl}/3/movie/${id}`, {
    params: { api_key: process.env.REACT_APP_API_KEY }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const search = (query) => {
  axios.get(`${baseUrl}/3/search/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      query
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error));
};

