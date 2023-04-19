import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from '../pages/Login';
import LoginLayout from '../layout/LoginLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LoginLayout />}>
      <Route index element={<Login />} />
    </Route>
  )
);
