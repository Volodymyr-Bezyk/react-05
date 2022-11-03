import { Outlet } from 'react-router-dom';
import { Container, Nav, NavigationLink } from './Layout.styled';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <NavigationLink to="/" end>
            Home
          </NavigationLink>
          <NavigationLink to="movies">Movies</NavigationLink>
        </Nav>
      </header>
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
