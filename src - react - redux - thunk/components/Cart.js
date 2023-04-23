import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "../store/actions";

const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const dispatch = useDispatch();
  const loginDetail = useSelector((state) => state.lr.loginDetail);

  const deleteHandler = (productIndex, price) => {
    dispatch({
      type: DELETE,
      payLoad: { productIndex, price },
    });
  };
  return (
    <div className="customDiv">
      <h4>Cart Component - User: {loginDetail}</h4>
      <ul>
        {cart.map((prod, index) => {
          return (
            <li
              value={prod.productPrice}
              key={index}
              onClick={() => deleteHandler(index, prod.productPrice)}
            >
              {prod.productName}
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default Cart;
