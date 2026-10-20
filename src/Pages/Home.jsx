
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="content-card">
      <h1>Welcome to ShopEase</h1>
      <p>Manage and track all your e-commerce orders in one place.</p>

      <Link to="/orders" className="primary-btn">
        View Orders
      </Link>
    </div>
  );
}

export default Home;
