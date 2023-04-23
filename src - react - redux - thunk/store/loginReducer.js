import * as actions from "./actions";
const initialData = {
  users: ["Admin", "Manager", "End-User"],
  loginDetail: "None",
};

const loginReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      return {
        ...state,
        loginDetail: action.payLoad,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
