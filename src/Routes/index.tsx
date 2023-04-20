import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from '../pages/Login';
import LoginLayout from '../layout/LoginLayout';
import Register from '../pages/Register';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<LoginLayout />}>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/home' element={<Home />} />
    </Route>
  )
);
