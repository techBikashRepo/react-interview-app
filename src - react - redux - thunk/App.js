import "./App.css";
import Purchase from "./components/Purchase";
import Cart from "./components/Cart";
import Total from "./components/Total";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Login />
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
};

export default App;
