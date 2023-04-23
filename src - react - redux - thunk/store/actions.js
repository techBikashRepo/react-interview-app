export const LOGIN = "LOGIN";
export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";

export const validateUser = (loginUser) => {
  // API call fetching user & then validating
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: LOGIN, payLoad: loginUser });
    }, 2000);
  };
};
