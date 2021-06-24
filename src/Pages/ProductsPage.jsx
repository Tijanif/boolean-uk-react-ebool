import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductsPages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  // params string
  const { categoryId } = useParams();

  const foundProducts = categoryId
    ? products.filter((product) => product.categoryId === Number(categoryId))
    : products;

  return (
    <main>
      <section className='products-container main-wrapper'>
        <ul className='products-container__list'>
          {foundProducts.map((product) => {
            return <ProductCard productIfno={product} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default ProductsPages;
