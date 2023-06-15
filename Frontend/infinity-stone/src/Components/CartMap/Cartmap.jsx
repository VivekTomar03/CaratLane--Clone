import "./Cartmap.css";
import React from "react";
import rightCart from "../../ImageData/rightCart.png";
import cart from "../../ImageData/cart.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../Redux/CartReducer/Action";
const Cartmap = ({
  imageurl,
  price,
  originalprice,
  title,
  size,
  HandleCartDelete,
  _id,
  quantity,
}) => {
  const { token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const hanldequantity = (val) => {
    axios(`https://cartlane.onrender.com/cart/update/${_id}`, {
      method: "patch",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { quantity: quantity + val },
    }).then(() => {
      dispatch(getCartProducts(token));
    });
  };
  return (
    <div className="details">
      <div   className="imgDiv">
        <img  src={imageurl} alt="h" />
      </div>
      <div className="detailsDiv">
        <h3 style={{ fontWeight: "bold" }}>{title}</h3>
        <p>JR07228-1YP900</p>
        <div className="sizeQue">
          <h5>Size: {size}</h5>
          <h5>
            Qty :  <span  onClick={() => hanldequantity(-1)}>
             <button disabled={quantity==1}>-</button> 
            </span>{" "}
            {quantity} <span onClick={() => hanldequantity(+1)}><button>+</button></span>
          </h5>
        </div>
        <div>
          <p id="delivery">Check Delivery Date</p>
          <p className="pricedetails">
            <span style={{ fontWeight: "bold" }}>₹ {price}</span>
            <span
              style={{
                fontWeight: "bold",
                color: "grey",
                textDecoration: "line-through",
              }}>
              ₹ {originalprice}
            </span>
            <span style={{ fontWeight: "bold", color: "red " }}>
              Save ₹{originalprice - price}
            </span>
          </p>
        </div>
      </div>
      <div className="btnDiv">
        <button onClick={() => HandleCartDelete(_id)}>Remove</button>
        <button style={{ border: "1px solid #9062f9" }}>
          Move to Wishlist
        </button>
      </div>
    </div>
  );
  
};

// </div>

export default Cartmap;
