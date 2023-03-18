import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
`;

export const Poster = styled.img`
  border-radius: 10px;
  width: 270px;
  height: 400px;
`;

export const FilmName = styled.h1``;

export const Description = styled.p``;

export const Overview = styled.h2``;

export const Genres = styled.h3``;

export const Button = styled(Link)`
  background-color: grey;
  color: white;
  padding: 10px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: -8px -5px 6px -1px darkgray;
  border: 1px solid grey;
  &:hover,
  &:focus {
    border: 1px solid white;
  }
`;

export const Text = styled.p``;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100% - 10px;
  background-color: lightgray;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const TextContainer = styled.div`
  padding: 10px;
  background-color: lightgray;
  border-radius: 10px;
  width: 100%;
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const BackBtn = styled(Link)`
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
  display: block;
  width: 80px;
  margin-bottom: 20px;
  text-align: center;
`;
