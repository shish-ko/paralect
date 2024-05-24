import { IndexPage } from 'pages/IndexPage/IndexPage';
import { Movie, loader as movieLoader } from 'pages/Movie/Movie';
import { Page_404 } from 'pages/Page_404/Page_404';
import { RatedPage } from 'pages/RatedPage/RatedPage';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { Default_UI, loader as genresLoader } from '~comps/Default_UI/Default_UI';

const routes = createRoutesFromElements(
  <Route path='/' element={<Default_UI/>} loader={genresLoader} id='root'>
    <Route element={<IndexPage/>} index={true} />
    <Route path={'movie/:id'} element={<Movie/>} loader={movieLoader}/>
    <Route path={'rated'} element={<RatedPage />} />
    <Route path='*' element={<Page_404 />} />
  </Route>
);

export const router = createBrowserRouter(routes);
