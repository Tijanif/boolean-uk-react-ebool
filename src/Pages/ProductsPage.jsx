import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  console.log(products);
  return (
    <main>
      <section className='products-container main-wrapper'>
        <ul className='products-container__list'>
          {products.map((product) => {
            return <ProductCard productIfno={product} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default ProductsPages;
