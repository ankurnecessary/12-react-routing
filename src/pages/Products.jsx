import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Product1'
  },
  {
    id: 'p2',
    name: 'Product2'
  },
  {
    id: 'p3',
    name: 'Product3'
  }
];
function ProductsPage () {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductsPage;
