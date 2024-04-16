// ProductService.ts
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // The array of products
  } catch (error) {
    console.error("Error fetching products", error);
    return []; // Return an empty array in case of an error
  }
};
