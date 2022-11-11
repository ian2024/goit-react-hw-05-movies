import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout  from './SharedLayout/SharedLayout';




const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));




export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast/>} />
            <Route path='reviews' element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
     <ToastContainer position='top-right' autoClose={4500} />
    </>
  );
};
