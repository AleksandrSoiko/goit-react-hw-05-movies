import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <div>Movies</div>
      <Outlet />
    </div>
  );
};