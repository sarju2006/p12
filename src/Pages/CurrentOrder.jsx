
const orders = [
  {
    id: 'ORD-101',
    product: 'Wireless Headphones',
    date: '12 Oct 2026',
    status: 'Processing',
    amount: '₹2,499'
  },
  {
    id: 'ORD-102',
    product: 'Smart Watch',
    date: '11 Oct 2026',
    status: 'Shipped',
    amount: '₹3,999'
  },
  {
    id: 'ORD-103',
    product: 'Bluetooth Speaker',
    date: '10 Oct 2026',
    status: 'Out for Delivery',
    amount: '₹1,499'
  }
];

function CurrentOrders() {
  return (
    <div>
      <h2>Current Orders</h2>
      <p>Track your active orders and their status.</p>

      <div className="order-list">
        {orders.map(order => (
          <div className="order-item" key={order.id}>
            <div>
              <h3>{order.product}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-info">
              <strong>{order.amount}</strong>
              <span className="status active">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;
