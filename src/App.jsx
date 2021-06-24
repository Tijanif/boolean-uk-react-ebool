import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import BasketPage from './Pages/BasketPage';
import ProductsPages from './Pages/ProductsPage';

function App() {
  return (
    <>
      <Header />

      <main>
        {
          <Router>
            <Switch>
              <Route path='/'>
                <ProductsPages />
              </Route>
              <Route path='/Categories'>
                <CategoriesPage />
              </Route>
              <Route path='/Basket'>
                <BasketPage />
              </Route>
            </Switch>
          </Router>
        }
      </main>
    </>
  );
}

export default App;
