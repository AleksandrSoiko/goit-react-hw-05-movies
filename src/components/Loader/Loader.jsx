import { Triangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <Triangle color="#102fdfdd" height={200} width={200} />
  </LoaderContainer>
);
