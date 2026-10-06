// ONE card, written ONCE. We reuse it for every product.
// "product" and "onAdd" are props: the inputs we give to the card.
function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <div className="emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <span className="tag">{product.category}</span>
      <p className="price">₹{product.price}</p>
      <button onClick={() => onAdd(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
