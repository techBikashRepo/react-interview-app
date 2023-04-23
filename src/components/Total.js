import { useSelector } from "react-redux";
const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const loginDetail = useSelector((state) => state.lr.loginDetail);
  return (
    <div className="customDiv">
      <h4>Total Component - User: {loginDetail}</h4>
      <hr />
      <h3>Total : {total}</h3>
    </div>
  );
};

export default Total;
