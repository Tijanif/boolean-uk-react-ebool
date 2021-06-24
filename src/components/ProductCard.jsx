const ProductCard = () => {
  return (
    <section class='products-container main-wrapper'>
      <ul class='products-container__list'>
        <li>
          <a href='/products/1'>
            <article class='product-item'>
              <img
                src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
              />
              <h3>Fjallraven - Foldsack...</h3>
            </article>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ProductCard;
