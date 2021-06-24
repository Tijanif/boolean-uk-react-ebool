import { Link } from 'react-router-dom';

const ProductCard = ({ productIfno }) => {
  const { title, categoryId, image } = productIfno;
  return (
    <li key={categoryId}>
      <Link href={`/products/${categoryId}`}>
        <article className='product-item'>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </article>
      </Link>
    </li>
  );
};

export default ProductCard;
