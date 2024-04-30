import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path='/' element={<div>Hello!</div>}>
    <Route element={<div/>} index={true} />
    <Route path={'movie'} element={<div/>} />
    <Route path={'rated'} element={<div/>} />
  </Route>
);

export const router = createBrowserRouter(routes);
