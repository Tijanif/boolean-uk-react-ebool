import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h1>Loading</h1>;
  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
