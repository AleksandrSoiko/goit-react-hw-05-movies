import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 50px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px -2px 4px 3px rgba(34, 60, 80, 0.47);
  color: wheat;
  background-color: black;
  &:hover,
  &:focus {
    background-color: darkgoldenrod;
  }
`;
