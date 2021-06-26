const ProductDetail = ({ product, addItemToBasket }) => {
  const { title, image, price, description } = product;
  return (
    <>
      <section class='product-detail main-wrapper'>
        <img src={image} alt={title} />
        <div
          class='product-detail__side'
          style={{ borderColor: 'var(--yellow)' }}
        >
          <h3></h3>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>£{price}</p>
          <button onClick={() => addItemToBasket(product)}>
            Add to basket
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
