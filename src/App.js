import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error.jsx';
import Root from './pages/Root';

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/products',
          element: <ProductsPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
