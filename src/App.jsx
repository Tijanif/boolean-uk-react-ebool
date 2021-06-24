import Header from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
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
              <Redirect to='/products' />
            </Route>
            <Route path='/products' exact>
              <ProductsPages />
            </Route>
            <Route path='/categories' exact>
              <CategoriesPage />
            </Route>
            <Route path='/categories/:categoryId' exact>
              <ProductsPages />
            </Route>
            <Route path='/basket' exact>
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
