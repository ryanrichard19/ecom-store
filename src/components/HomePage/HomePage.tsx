import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the homepage of our React application!</p>
      <ProductCarousel />
    </div>
  );
};

export default HomePage;
