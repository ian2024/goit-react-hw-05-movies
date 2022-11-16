import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiReplyLine } from 'react-icons/ri';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchMovieDetails } from 'services/api';
import { Block, Button, Item, List, NavItem, Section, Title } from './MovieDetails.styled';



const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');
    const navigate = useNavigate();
    const location = useLocation();
    const arrowBack = location.state?.from ?? '/';

    useEffect(() => {
        async function getMovieDetails() {
            try {
                setStatus('pending');
                const r = await fetchMovieDetails(movieId);
                setMovie(r);
                setStatus('resolved');
            } catch (error) {
                toast.error(error.message)
                setStatus('rejected');
            }
        }
        getMovieDetails();
    }, [movieId]);

    const handleSubmit = () => {
        navigate(arrowBack, { replace: true });
    }

    return (
        <Section>
            <Button type='button' onClick={handleSubmit}>
                <RiReplyLine size='14px' /> Back
            </Button>
            {status === 'pending' && <Loader />}
            {movie && (
                <div>
                    <MovieCard movie={movie} />
                    <Block>
                        <Title>INFO Movie</Title>
                        <List>
                            <Item>
                                <NavItem to='cast' state={{from: location.state.from}}>Cast</NavItem>
                            </Item>
                            <Item>
                                <NavItem to='reviews' state={{from: location.state.from}}>Reviews</NavItem>
                            </Item>
                        </List>
                    </Block>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            )}
            {!movie || (status === 'rejected' && <h2>Sorry, not found INFO</h2>)}
        </Section>
    );
};

export default MovieDetails;