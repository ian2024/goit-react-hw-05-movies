import { DEF_IMG, DEF_PATH } from 'defaultImages/defaultImages';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Image, Item, Text } from './MoviesItem.styled';

export const MovieItem = ({ movie }) => {
    const location = useLocation();
    const { id, poster_path, title } = movie;
    return (
        <>
            <Item>
                <NavLink to={`/movies/${id}`} state={{from: location}}>
                    <Image src={poster_path ? DEF_PATH + poster_path : DEF_IMG} width='100%' alt={title} />
                    <Text>{title}</Text>
                </NavLink>
            </Item>
        </>
    );
};

MovieItem.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default MovieItem;