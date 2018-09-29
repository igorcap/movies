import axios from 'axios';

const baseUrl = "https://api.themoviedb.org";

export const getLatestMovies = () => {
    axios.get(`${baseUrl}/3/discover/movie`, {
        params: {
            api_key: process.env.API_KEY,
            sort_by: "popularity.desc"
        }
    })
        .then(res => res.data)
        .catch(error => console.log(error));
};

export const getMovieDetails = id => {
    axios.get(`${baseUrl}/3/movie/${id}`, {
        params: { api_key: process.env.API_KEY }
    })
        .then(res => res.data)
        .catch(error => console.log(error));
};

export const search = query => {
    axios.get(`${baseUrl}/3/search/movie`, {
        params: { 
            api_key: process.env.API_KEY,
            query
         }
    })
        .then(res => res.data)
        .catch(error => console.log(error));
}
