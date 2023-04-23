import * as actions from "./actions";
const initialData = {
  products: [
    { productName: "Apple", productPrice: 10 },
    { productName: "Banana", productPrice: 20 },
    { productName: "Orange", productPrice: 30 },
    { productName: "Grapes", productPrice: 40 },
  ],
  cart: [],
  total: 0,
  users: ["Admin", "Manager", "End-User"],
};

const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.PURCHASE: {
      return {
        ...state,
        cart: [...state.cart, action.payLoad],
        total: state.total + parseInt(action.payLoad.productPrice),
      };
    }
    case actions.DELETE: {
      return {
        ...state,
        cart: state.cart.filter(
          (i, index) => index !== action.payLoad.productIndex
        ),
        total: state.total - action.payLoad.price,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
