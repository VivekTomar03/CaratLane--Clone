import React from "react";
import checkout from "../../ImageData/checkout.png";
import "../CheckOutPage/checkoutPage.css";
import Checkout from "../../Components/Checkout/Checkout";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Cartmap from "../../CartMap/Cartmap";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import {
  deleteCartdata,
  getCartProducts,
} from "../../Redux/CartReducer/Action";

const CheckoutPage = () => {
  const toast = useToast();
  // const [quantity1, setquantity] = useState(1);
  const navigate = useNavigate();
  const { carts, isLoading, isError } = useSelector((store) => {
    return {
      carts: store.cartReducer.carts,
      isLoading: store.cartReducer.isLoading,
      isError: store.cartReducer.isError,
    };
  }, shallowEqual);
  const { token } = useSelector((state) => state.authReducer);
  console.log(carts);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  let totalprice = 0;
  for (var i = 0; i < carts.length; i++) {
    totalprice = totalprice + carts[i].quantity * carts[i].price;
  }
  // console.log(carts[i].price, quantity1[i]);

  let totalOriginPrice = 0;
  for (var i = 0; i < carts.length; i++) {
    totalOriginPrice =
      totalOriginPrice + carts[i].quantity * carts[i].originalprice;
  }

  let totalSavePrice = totalOriginPrice - totalprice;

  const handleEmptyCart = () => {

    navigate("/success");
  };
  return (
    <div className="main">
      {/* left */}
      <div className="left">
        <h2>Select Payment Method</h2>

        <div>
          <img src={checkout} />
        </div>

        <div className="leftBottomDiv">
          <div>
            <div>
              <input className="inp"  name="fav" id="credit" type="radio" />
              <label for="credit" className="inp_p">Credit Card</label>
            </div>
            <div>
              <input className="inp" id="debit"  name="fav" type="radio" />
              <label for="debit" className="inp_p">Debit Card</label>
            </div>
            <div>
              <input className="inp" id="upi"  name="fav" type="radio" />
              <label for="upi" className="inp_p">UPI</label>
            </div>
            <div>
              <input className="inp" id="netbanking"  name="fav" type="radio" />
              <label for="netbanking" className="inp_p">Netbanking</label>
            </div>
            <div>
              <input className="inp" id="offline"   name="fav" type="radio" />
              <label for="offline" className="inp_p">Offline Payment</label>
            </div>
          </div>

          <button className="priceBtn" onClick={() => handleEmptyCart()}>
            ₹ {totalprice}
          </button>
        </div>
      </div>

      {/* right */}
      <div className="right">
        <div>
          <div className="mainDiv" style={{ width: "100%" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "1000px",
                margin: "32px 0px 20px 32px",
                
              }}>
              Order Summary
            </h2>
            {carts.length > 0 &&
              carts.map((el) => {
                return <Checkout key={el.id} {...el} />;
              })}
          </div>

          <div
            style={{
              margin: "32px 0px 20px 20px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              width: "95%",
            }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px",
              }}>
              <p>SUBTOTAL</p>
              <p>{totalprice}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px",
              }}>
              <p>CARD DISCOUNT</p>
              <p>- ₹ {totalSavePrice}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px",
              }}>
              <p>SHIPPING CHARGES (Standard)</p>
              <p style={{ fontWeight: "bold" }}>FREE</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px",
              }}>
              <p style={{ fontWeight: "bold" }}>TOTAL PRICE</p>
              <p style={{ fontWeight: "bold" }} > ₹ {totalprice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
