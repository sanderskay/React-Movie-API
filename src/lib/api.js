import axios from 'axios';
import { useEffect, useState } from 'react';
import { MOVIE_DB_API_KEY } from './config';

const fetchMovies = () => {
    return axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=1`
    );
};

export const usePopularMovies = () => {
    const [state, setState] = useState({ loading: false, error: undefined, data: null });
    const { loading, error, data } = state;

    useEffect(() => {
        setState({ ...state, loading: true });
        fetchMovies()
            .then((res) => setState({ error: undefined, data: res.data.results, loading: false }))
            .catch((err) => setState({ error: err, loading: false, data: null }));
    }, [])
    
    return { loading, error, data };
}

export const fetchSearch = async (searchText) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    );

    return data;
}