import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';
import Reviews from 'components/Reviews';
import Cast from 'components/Cast';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" end element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="*" element={<div>Page not found</div>}></Route>
          </Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
