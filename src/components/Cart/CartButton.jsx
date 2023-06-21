import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

// TODO: Implement the Dispatch Actions from the UI Slice
const CartButton = () => {
  const cartHandler = () => {
    // const useDispatch
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
