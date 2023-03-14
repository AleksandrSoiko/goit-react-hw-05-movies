import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
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
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6a9443e9560321a4e46f64bd6f702be3';

export const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovieDetailsInfo() {
      try {
        const response = await axios.get(
          `movie/${id}?api_key=${KEY}&language=en-US`,
          {
            signal: abortController.signal,
          }
        );
        if (film !== null) return;
        setFilm(response.data);
        setStatus('loaded');
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetailsInfo();
    return () => {
      abortController.abort();
    };
  }, [film, id]);

  return (
    <Container>
      {status === 'idle' && <Loader />}
      {film !== null && (
        <>
          <FilmWrapper>
            <Poster
              src={
                film.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w300/${film.poster_path}`
                  : 'https://www.t-design.ru/img/digital_kino/pic_01.jpg'
              }
            />
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
      <Outlet />
    </Container>
  );
};
