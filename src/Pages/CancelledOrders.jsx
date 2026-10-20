
const orders = [
  {
    id: 'ORD-065',
    product: 'Gaming Mouse',
    date: '20 Sep 2026',
    amount: '₹1,199'
  },
  {
    id: 'ORD-061',
    product: 'Phone Case',
    date: '18 Sep 2026',
    amount: '₹499'
  }
];

function CancelledOrders() {
  return (
    <div>
      <h2>Cancelled Orders</h2>
      <p>Review your cancelled purchases.</p>

      <div className="order-list">
        {orders.map(order => (
          <div className="order-item" key={order.id}>
            <div>
              <h3>{order.product}</h3>
              <p>{order.id} · {order.date}</p>
            </div>

            <div className="order-info">
              <strong>{order.amount}</strong>
              <span className="status cancelled">
                Cancelled
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;
