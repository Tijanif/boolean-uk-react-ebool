import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import BasketPage from './Pages/BasketPage';
import ProductsPages from './Pages/ProductsPage';
import PageNotFound from './Pages/PageNotFount';
import ProductDetailPage from './Pages/ProductDetailPage';
import { useState } from 'react';

function App() {
  const [basket, setBasket] = useState([
    {
      id: 1,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      quantity: 10,
      price: 100.95,
    },
    {
      id: 2,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      quantity: 4,
      price: 22.3,
    },
    {
      id: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      title: 'Mens Cotton Jacket',
      quantity: 5,
      price: 55.99,
    },
  ]);

  function addItemToBasket(product) {
    console.log('product', product);
  }

  return (
    <>
      <Header />

      <main>
        {
          <Switch>
            <Route path='/' exact>
              <Redirect to='/products' />
            </Route>
            <Route path='/products' exact>
              <ProductsPages />
            </Route>
            <Route path='/products/:id' exact>
              <ProductDetailPage addItemToBasket={addItemToBasket} />
            </Route>
            <Route path='/categories' exact>
              <CategoriesPage />
            </Route>
            <Route path='/categories/:categoryId' exact>
              <ProductsPages />
            </Route>
            <Route path='/basket' exact>
              <BasketPage basket={basket} />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        }
      </main>
    </>
  );
}

export default App;
