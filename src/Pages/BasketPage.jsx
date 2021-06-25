import BasketItem from '../components/BasketItem';
const BasketPage = ({ basket }) => {
  return (
    <section class='basket-container'>
      <h2>Your Basket</h2>
      <ul>
        {basket.map((item) => (
          <BasketItem item={item} />
        ))}
      </ul>
      {/* <!-- Basket total is calculated using each item's total from above --> */}
      <h3>Your total: £109.95</h3>
    </section>
  );
};

export default BasketPage;
