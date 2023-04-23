import { useSelector, useDispatch } from "react-redux";
import { PURCHASE } from "../store/actions";

const Purchase = () => {
  const products = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();
  const loginDetail = useSelector((state) => state.lr.loginDetail);

  const purchaseHandler = (e) => {
    let productName = e.target.options[e.target.selectedIndex].text;
    let productPrice = e.target.value;
    let obj = { productName, productPrice };
    dispatch({ type: PURCHASE, payLoad: obj });
  };
  return (
    <div className="customDiv">
      <h4>Purchase Component - User: {loginDetail}</h4>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.productPrice} key={index}>
              {product.productName} - ₹ {product.productPrice}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchase;
