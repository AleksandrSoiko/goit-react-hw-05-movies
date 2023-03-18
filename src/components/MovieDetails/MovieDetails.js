import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Button,
  Description,
  FilmName,
  Genres,
  Overview,
  Poster,
  Text,
  ButtonWrapper,
  TextContainer,
  FilmWrapper,
  BackBtn,
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import imageValidation from 'func/func';
import { fetchMovieDetailsInfo } from 'components/serviseAPI/fetchMoviesAPI';

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovieId = async () => {
      const results = await fetchMovieDetailsInfo(id, {
        signal: abortController.signal,
      });

      if (film !== null) return;
      if (results) setFilm(results);
      setStatus('loaded');
    };
    fetchMovieId();
    return () => {
      abortController.abort();
    };
  }, [film, id]);

  return (
    <Container>
      <BackBtn to={backLinkLocationRef.current}>Go back</BackBtn>
      {status === 'idle' && <Loader />}
      {film !== null && (
        <>
          <FilmWrapper>
            <Poster src={imageValidation(film.poster_path, 300)} />
            <TextContainer>
              <FilmName>{film.original_title}</FilmName>
              <Description>
                User Score: {Math.trunc(film.vote_average * 10)}%
              </Description>
              <Overview>Overview</Overview>
              <Description>{film.overview}</Description>
              <Genres>Genres</Genres>
              <Description>
                {film.genres.map(el => el.name).join(' | ')}
              </Description>
            </TextContainer>
          </FilmWrapper>
          <Text></Text>
          <ButtonWrapper>
            <Button to={'cast'}>Cast</Button>
            <Button to={'reviews'}>Reviews</Button>
          </ButtonWrapper>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
