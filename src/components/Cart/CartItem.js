import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, quantity, totalPrice, price, id } = props.item;
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch({
      type: "Cart/ADDITEM_CART",
      payload: {
        id,
        title: name,
        price,
        quantity,
      },
    });
  };
  const removeCartHandler = () => {
    dispatch({
      type: "Cart/REMOVEITEM_CART",
      payload: {
        id,
        title: name,
        price,
        quantity,
      },
    });
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
