import "./Cartmap.css";
import React from "react";
import rightCart from "../../ImageData/rightCart.png";
import cart from "../../ImageData/cart.png";
const Cartmap = ({
  imageurl,
  price,
  originalprice,
  title,
  size,
  HandleCartDelete,
  id,
  quantity,
}) => {
  return (
    <div className="details">
      <div className="imgDiv">
        <img src={imageurl} alt="" />
      </div>
      <div className="detailsDiv">
        <p>{title}</p>
        <p>JR07228-1YP900</p>
        <div className="sizeQue">
          <h5>Size: {size}</h5>
          <h5>Quantity : {quantity}</h5>
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
        <button onClick={() => HandleCartDelete(id)}>Remove</button>
        <button style={{ border: "1px solid #9062f9" }}>
          Move to Wishlist
        </button>
      </div>
    </div>
  );
  // <div id="mainCart">
  {
    /* right */
  }
  // <div id="cart" style={{border:"1px solid red"}}>
  {
    /* <div id="cartimg">
          <img src={cart} />
        </div> */
  }
  {
    /* <div className="total">
          <h4>
            Totol <span>(1 Item)</span> : <span>38,000</span>
          </h4>
        </div> */
  }
};
// </div>

{
  /* left */
}
{
  /* <div id="bill">
        <div ><img style={{height:'130px',width:"100%", }} src={rightCart}/></div>
        <h3>Order Summary</h3>
        <div className="billDetails">
          <div className="subtotalBill">
            <p>Subtotal</p>
            <p>41,089</p>
          </div>
          <div className="savedBill">
            <p>You Saved</p>
            <p style={{color:"#c9b8fc"}}>-4,283</p>
          </div>
          <div className="deliveryBill">
            <p>Delivery Charge (Standard)</p>
            <p style={{color:"#c9b8fc"}}>FREE</p>
          </div>
          <div className="totalBill">
            <h3>TOTAL COST</h3>
            <h3>36,806</h3>
          </div>
        </div>
        <div >
          <button style={{width:"100%", margin:"auto", padding:"10px" , borderRadius:"5px" , border:"none", background:"linear-gradient(to right, #d158e8, #9062f9)", marginTop:"10px"}}>Checkeout Securely</button>
        </div>
      </div> */
}
// </div>

export default Cartmap;
