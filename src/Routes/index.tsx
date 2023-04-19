import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from '../pages/Login';
import LoginLayout from '../layout/LoginLayout';
import Register from '../pages/Register';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LoginLayout />}>
      <Route index element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
);
