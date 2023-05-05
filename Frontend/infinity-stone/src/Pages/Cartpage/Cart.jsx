import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import Cartmap from "../../CartMap/Cartmap";
import EmptyCart from "../../Components/EmptyCart/EmptyCard";
import "./Cart.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import rightCart from "../../ImageData/rightCart.png";
import {
  deleteCartdata,
  getCartProducts,
} from "../../Redux/CartReducer/Action";
import Cartmap from "../../Components/CartMap/Cartmap";
import cart from "../../ImageData/cart.png";
const Cart = () => {
  const navigate = useNavigate();

  const { carts, isLoading, isError } = useSelector((store) => {
    return {
      carts: store.cartReducer.carts,
      isLoading: store.cartReducer.isLoading,
      isError: store.cartReducer.isError,
    };
  }, shallowEqual);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  function HandleCartDelete(id) {
    dispatch(deleteCartdata(id)).then(() => {
      dispatch(getCartProducts());
    });
  }

  return (
    <div>
      {carts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div id="mainCart">
          <div id="cart" style={{ border: "1px solid red" }}>
            <div id="cartimg">
              <img src={cart} />
            </div>
            <div className="total">
              <h4>
                Totol <span>(1 Item)</span> : <span>38,000</span>
              </h4>
            </div>
            {carts.length > 0 &&
              carts.map((el) => {
                return (
                  <Cartmap
                    key={el.id}
                    {...el}
                    HandleCartDelete={HandleCartDelete}
                  />
                );
              })}

            {/* left */}
          </div>
          <div id="bill">
            <div>
              <img style={{ height: "130px", width: "100%" }} src={rightCart} />
            </div>
            <h3>Order Summary</h3>
            <div className="billDetails">
              <div className="subtotalBill">
                <p>Subtotal</p>
                <p>41,089</p>
              </div>
              <div className="savedBill">
                <p>You Saved</p>
                <p style={{ color: "#c9b8fc" }}>-4,283</p>
              </div>
              <div className="deliveryBill">
                <p>Delivery Charge (Standard)</p>
                <p style={{ color: "#c9b8fc" }}>FREE</p>
              </div>
              <div className="totalBill">
                <h3>TOTAL COST</h3>
                <h3>36,806</h3>
              </div>
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  margin: "auto",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "linear-gradient(to right, #d158e8, #9062f9)",
                  marginTop: "10px",
                }}>
                Checkeout Securely
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
