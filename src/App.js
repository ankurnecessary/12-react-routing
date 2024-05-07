import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/Products.jsx';
import ProductDetailPage from './pages/ProductDetail.jsx';
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
        },
        {
          path: '/products/:productId',
          element: <ProductDetailPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
