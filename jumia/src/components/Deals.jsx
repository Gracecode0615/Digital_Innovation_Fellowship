const deals = [
  { title: "iPhone 13", price: "₦450,000" },
  { title: "Sneakers", price: "₦15,000" },
  { title: "Smart TV", price: "₦180,000" },
];

const Deals = () => (
  <div className="deals">
    <h2>Deals of the Day</h2>
    {deals.map((deal, index) => (
      <div className="deal-card" key={index}>
        <p>{deal.title}</p>
        <strong>{deal.price}</strong>
      </div>
    ))}
  </div>
);

export default Deals;
