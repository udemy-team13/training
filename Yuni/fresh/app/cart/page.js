export default function Cart() {
  let cart = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem title={cart[0]} />
      <CartItem title={cart[1]} />
      <CartItem title={cart[2]} />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.title}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
