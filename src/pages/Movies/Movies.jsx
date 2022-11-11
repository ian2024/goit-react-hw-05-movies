import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import Searchbar from "components/Searchbar/Searchbar";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSource } from "services/api";
import { Container } from "./Movies.styled";





const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieNames = searchParams.get('query') ?? '';

    const newQuery = query => {
        const newParams = query !== '' ? { query } : {};
        setSearchParams(newParams);
    };


    useEffect(() => {
        if (movieNames === '') {
            return;
        }
        async function getMovies() {
            try {
                setStatus('pending');
                const r = await fetchSource(movieNames);
                setMovies(r);
                setStatus('resolved');
            } catch (error) {
                setStatus('rejected');
                toast(error.message);
            }
        }
        getMovies();
    }, [movieNames]);



    const handleSearch = input => {
       
        newQuery(input.trim());
    }

    return (
        <div>
            <Searchbar getSearchQuery={handleSearch} />
            
            <Container>
                {movies.length > 0 && <MoviesList movies={movies} />}
            </Container>
            {status === 'pending' && <Loader/>}
        </div>
    )
}

export default Movies;