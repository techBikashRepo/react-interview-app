import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const users = useSelector((state) => state.lr.users);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    let loginUser = e.target.options[e.target.selectedIndex].text;
    dispatch({ type: "LOGIN", payLoad: loginUser });
  };
  return (
    <div className="customDiv">
      <h4>Login Component</h4>
      <hr />
      <select
        onChange={(e) => {
          loginHandler(e);
        }}
      >
        {users.map((user, index) => {
          return <option key={index}>{user}</option>;
        })}
      </select>
    </div>
  );
};

export default Login;
