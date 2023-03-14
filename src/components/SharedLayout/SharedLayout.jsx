import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Layout } from 'components/Layout/Layout';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
