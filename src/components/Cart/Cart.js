import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(({ name, quantity, price, totalPrice, id }) => (
          <CartItem key={id} item={{ id, name, quantity, totalPrice, price }} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
