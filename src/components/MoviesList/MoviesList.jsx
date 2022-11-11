import PropTypes from 'prop-types';
import { MovieItem } from 'components/MoviesItem/MoviesItem';
import { Container } from 'components/MovieCard/MovieCard.styled';
import { List } from './MoviesList.styled';


const MoviesList = ({ movies }) => {
    return (
        <Container>
            <List>
                {movies.map(movie => (
                    <MovieItem movie={movie} key={movie.id} />
                ))}
            </List>
        </Container>
    );
};


MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ),
};

export default MoviesList;