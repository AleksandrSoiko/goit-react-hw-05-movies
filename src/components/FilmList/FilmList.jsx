import { FilmItem } from 'components/FilmItem/FilmItem';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { Button, List } from './FilmList.styled';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '6a9443e9560321a4e46f64bd6f702be3';

export const FilmList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const handleClick = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchTrendingMovies() {
      try {
        const response = await axios.get(
          `trending/all/day?api_key=${KEY}&page=${page}`,
          {
            signal: abortController.signal,
          }
        );
        setData(prevData => {
          return [...prevData, ...response.data.results];
        });
        setStatus('loaded');
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendingMovies();
    return () => {
      abortController.abort();
    };
  }, [page]);

  return (
    <div>
      {status === 'idle' && <Loader />}
      <List>
        {data.map(el => (
          <FilmItem
            key={nanoid()}
            imageLink={el.poster_path}
            title={el.original_title || el.original_name || el.title}
            id={el.id}
          />
        ))}
      </List>
      {data.length !== 0 && <Button onClick={handleClick}>Load more</Button>}
    </div>
  );
};
