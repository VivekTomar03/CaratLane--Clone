import { useNavigate } from "react-router-dom";
import emptyCart from "../../ImageData/emptyCart.png";
import "./emptyCart.css";
const EmptyCart = () => {
  const navigate = useNavigate();
  const handleHome = () => {
      navigate("/");
  };
  return (
    <div id="emptyCart">
      <img src={emptyCart} />
      <h1>Empty Bag!</h1>
      <p>Let's do some retail therapy!</p>
      <button  onClick={handleHome}>Start Shopping </button>
    </div>
  );
};
export default EmptyCart;
