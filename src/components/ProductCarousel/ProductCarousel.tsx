import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Slider from 'react-slick';
import '../../styles/ProductCarousel.scss';
import { getProducts } from '../../services/ProductService';

// Define a type for your product items if you want to leverage TypeScript's type checking
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type for state

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.slice(0, 5)); // Assume getProducts() returns the correct data type
    };

    fetchProducts();
  }, []);

  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {products.map((product: Product) => ( // Use the Product type for map
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
