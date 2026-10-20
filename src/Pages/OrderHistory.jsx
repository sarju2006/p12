
const orders = [
  {
    id: 'ORD-089',
    product: 'Laptop Backpack',
    date: '05 Oct 2026',
    amount: '₹1,299'
  },
  {
    id: 'ORD-076',
    product: 'USB-C Charger',
    date: '28 Sep 2026',
    amount: '₹899'
  }
];

function OrderHistory() {
  return (
    <div>
      <h2>Order History</h2>
      <p>Review your previously completed purchases.</p>

      <div className="order-list">
        {orders.map(order => (
          <div className="order-item" key={order.id}>
            <div>
              <h3>{order.product}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-info">
              <strong>{order.amount}</strong>
              <span className="status completed">
                Delivered
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
