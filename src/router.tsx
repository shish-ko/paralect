import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { Default_UI } from '~comps/Default_UI/Default_UI';

const routes = createRoutesFromElements(
  <Route path='*' element={<Default_UI/>}>
    <Route element={<div>Hello</div>} index={true} />
    <Route path={'movie'} element={<div/>} />
    <Route path={'rated'} element={<div/>} />
  </Route>
);

export const router = createBrowserRouter(routes);
