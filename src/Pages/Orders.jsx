
import { NavLink, Outlet } from 'react-router-dom';

function Orders() {
  return (
    <div className="content-card">
      <h1>Order Management</h1>
      <p>View and manage your orders below.</p>

      <nav className="order-tabs">
        <NavLink to="/orders" end>
          Current Orders
        </NavLink>

        <NavLink to="/orders/history">
          Order History
        </NavLink>

        <NavLink to="/orders/cancelled">
          Cancelled Orders
        </NavLink>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
