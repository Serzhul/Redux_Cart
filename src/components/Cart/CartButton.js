import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch({ type: "ui/toggle" });
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
