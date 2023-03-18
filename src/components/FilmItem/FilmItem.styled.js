import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  box-shadow: 1px 5px 8px 4px rgba(0, 19, 166, 0.32);
`;
export const Image = styled.img`
  width: 300px;
  height: 450px;
`;
export const Title = styled.span`
  padding: 5px;
  font-size: 14px;
`;
export const Button = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  border-radius: 5px;

  &:visited,
  &:active {
    color: black;
  }
  &:hover,
  &:focus {
    color: wheat;
  }
`;

export const Input = styled.input``;
