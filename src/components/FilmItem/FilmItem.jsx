import { Button, Image, Item, Title } from './FilmItem.styled';
import { ImFilm } from 'react-icons/im';

export const FilmItem = ({ imageLink, title, id }) => {
  return (
    <>
      <Item>
        <Image src={`https://image.tmdb.org/t/p/w300/${imageLink}`} />
        <Title>{title}</Title>
        <Button to={`movies/${id}`}>
          Details{' '}
          <ImFilm
            style={{
              width: '25px',
              height: '25px',
            }}
          />
        </Button>
      </Item>
    </>
  );
};
