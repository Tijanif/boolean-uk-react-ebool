const BasketItem = ({ item }) => {
  const { title, image, price, quantity } = { item };
  const quantities = Array(item.quantity + 1)
    .fill()
    .map((item, index) => index);

  return (
    <li>
      <article class='basket-container__item'>
        <img src={image} alt={title} width='90' />
        <p>{title}</p>
        <p>
          Qty:
          <select value={quantity}>
            {quantities.map((quantity) => (
              <option>{quantity}</option>
            ))}
          </select>
        </p>
        <p>Item total: £{(quantity * price).toFixed(2)}</p>
      </article>
    </li>
  );
};

export default BasketItem;
