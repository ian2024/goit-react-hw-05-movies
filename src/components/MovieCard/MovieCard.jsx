import { BACK_PATH, COMP_PATH, DEF_IMG, DEF_PATH } from "defaultImages/defaultImages";
import PropTypes from "prop-types";
import { Backdrop, Block, Comp, Container, Image, ImageComp, Item, Subtitle, Text, Title } from "./MovieCard.styled";


const MovieCard = ({ movie }) => {
    const { title, production_companies, vote_average, poster_path, overview, genres, release_date, backdrop_path } = movie;


    return (
        <Container>
            <Backdrop src={backdrop_path ? BACK_PATH + backdrop_path : null} alt={title} />
            <Image src={poster_path ? DEF_PATH + poster_path : DEF_IMG} width='275px' alt={title} />
            <Block>
                <Title>
                    {title} ({release_date.slice(0, 4)})
                </Title>
                
                <Subtitle>Overview</Subtitle>
                <Text>{overview}</Text>
                <Text>Genres: {genres.map(genre => genre.name).join(', ')}</Text>
                <Text>User Score: {Math.round(vote_average * 10)}%</Text>
                <Comp>
                    {production_companies.map(company => {
                        if (!company.logo_path) {
                            return null;
                        } else {
                            return (
                                <Item key={company.name}><ImageComp width='150px' height='120px' src={COMP_PATH + company.logo_path} alt={company.name} /></Item>
                            )
                        }
                    })}
                </Comp>
            </Block>
        </Container>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
        ),
        production_companies: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo_path: PropTypes.string,
        })),
        release_date: PropTypes.string.isRequired,
    }
    ),
};

export default MovieCard;