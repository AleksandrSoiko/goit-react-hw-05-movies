import { Button, Image, Item, Title } from './FilmItem.styled';
import { ImFilm } from 'react-icons/im';
import imageValidation from 'func/func';

export const FilmItem = ({ imageLink, title, id, to, state }) => (
  <Item>
    <Image src={imageValidation(imageLink, 300)} />
    <Title>{title}</Title>
    <Button to={`${to}${id}`} state={state}>
      Details{' '}
      <ImFilm
        style={{
          width: '25px',
          height: '25px',
        }}
      />
    </Button>
  </Item>
);
