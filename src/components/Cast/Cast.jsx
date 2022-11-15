import { DEF_IMG, DEF_PATH } from 'defaultImages/defaultImages';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'services/api';
import { Image, List, ListBlock, ListItem, Subtitle, Title } from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getMoviesCast() {
            try {
                const r = await fetchMovieCast(movieId);
                setCast(r);
            } catch (error) {
                toast.error(error.message)
            }
        }
        getMoviesCast();
    }, [movieId]);
    if (!cast) {
        return;
    }


    return (
    <>
        {
            cast?.length ? (
                <List>
                    {cast?.map(({ name, profile_path, id, character }) => {
                        return (
                            <ListItem key={id}>
                                <ListBlock>
                                    <Image src={profile_path ? DEF_PATH + profile_path : DEF_IMG} alt={name} />
                                    <Title>{name}</Title>
                                    <Subtitle>Character: {character}</Subtitle>
                                </ListBlock>
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                <p>No information</p>
                )
   
            }
    </>    
    );
};

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            character: PropTypes.string.isRequired,
        })
    ),
};

export default Cast;