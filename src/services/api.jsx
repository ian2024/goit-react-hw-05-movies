import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b5dbd3e6c7997b0fe2a7670533341673';


export const fetchFilms = async () => {
    try {
       const r = await Axios.get(`trending/movie/week?api_key=${API_KEY}`);
        return r.data.results;
    } catch (error) {
        throw error;
    }
};


export const fetchSource = async query => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query,
    });
    try {
        const r = await Axios.get(`search/movie?${params}`);
        return r.data.results;
    } catch (error) {
        throw error;
    }
};


export const fetchMovieDetails = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}?api_key=${API_KEY}`);
        return r.data;
    } catch (error) {
        throw error;
    }
};

export const fetchMovieCast = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
        return r.data.cast;
    } catch (error) {
        throw error;
    }
};


export const fetchReviews = async movieId => {
    try {
        const r = await Axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
        return r.data.results;
    } catch (error) {
        throw error;
    }
};