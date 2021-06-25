import { Link } from 'react-router-dom';

const ProductCard = ({ productIfno }) => {
  const { title, image, id } = productIfno;

  return (
    <li key={id}>
      <Link to={`/products/${id}`}>
        <article className='product-item'>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </article>
      </Link>
    </li>
  );
};

export default ProductCard;
