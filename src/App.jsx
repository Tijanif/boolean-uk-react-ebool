import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import BasketPage from './Pages/BasketPage';
import ProductsPages from './Pages/ProductsPage';
import PageNotFound from './Pages/PageNotFount';

function App() {
  return (
    <>
      <Header />

      <main>
        {
          <Switch>
            <Route path='/' exact>
              <ProductsPages />
            </Route>
            <Route path='/Categories' exact>
              <CategoriesPage />
            </Route>
            <Route path='/Categories/:categoryId' exact>
              <ProductsPages />
            </Route>
            <Route path='/Basket' exact>
              <BasketPage />
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
