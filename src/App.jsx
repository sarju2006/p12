
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Home from './Pages/Home';
import Orders from './Pages/Orders';
import CurrentOrders from './Pages/CurrentOrder';
import OrderHistory from './Pages/OrderHistory';
import CancelledOrders from './Pages/CancelledOrders';
import NotFound from './Pages/NotFound';


function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <header className="navbar">
          <NavLink to="/" className="brand">
            ShopEase
          </NavLink>

          <nav className="main-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/orders">Orders</NavLink>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/orders" element={<Orders />}>
              <Route
                index
                element={<CurrentOrders />}
              />

              <Route
                path="history"
                element={<OrderHistory />}
              />

              <Route
                path="cancelled"
                element={<CancelledOrders />}
              />
            </Route>

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
