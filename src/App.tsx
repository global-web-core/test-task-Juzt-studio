import React from 'react';
import './App.css';
import {ListCarsPage, LoginPage, CarPage, AddCarPage} from './pages';
import { NAME_ID_FOR_PAGES, NAME_PAGES, TEXT } from './globals/constants/constants';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NotFound} from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListCarsPage />,
  },
  {
    path: NAME_PAGES.login,
    element: <LoginPage />,
  },
  {
    path: NAME_PAGES.addCar,
    element: <AddCarPage />,
  },
  {
    path: `${NAME_PAGES.listCars}/:${NAME_ID_FOR_PAGES.listCars}`,
    element: <CarPage />,
  },
  {
    path: `*`,
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>{TEXT.loading + '...'}</p>} />;
}