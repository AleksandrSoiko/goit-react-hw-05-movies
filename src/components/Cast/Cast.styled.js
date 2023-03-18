import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: lightgrey;
  border-radius: 10px;
`;

export const Item = styled.li`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  height: 450px;
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
`;

export const Text = styled.p`
  padding: 5px;
  text-align: center;
  font-weight: 500;
`;

export const Container = styled.div``;
