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
  const [quantity1, setquantity] = useState(1);
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

  // function HandleCartDelete(id) {
  //   dispatch(deleteCartdata(id,token)).then(() => {
  //     dispatch(getCartProducts(token));
  //   });
  // }

  // const id = carts.map((el) => {
  //   return el._id;
  // });
  // console.log("id",id[0]);
  const handleEmptyCart = () => {
     navigate("/success")
//     console.log("hiii")
//     axios(`https://red-worried-dove.cyclic.app/cart/update/${id[0]}`, {
//       method: "patch",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: [],
//     }).then((res) => {
// console.log("res",res)
//       // dispatch(getCartProducts(token));
//     });
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
              <input className="inp" type="radio" />
              <p className="inp_p">Credit Card</p>
            </div>
            <div>
              <input className="inp" type="radio" />
              <p className="inp_p">Debit Card</p>
            </div>
            <div>
              <input className="inp" type="radio" />
              <p className="inp_p">UPI</p>
            </div>
            <div>
              <input className="inp" type="radio" />
              <p className="inp_p">Netbanking</p>
            </div>
            <div>
              <input className="inp" type="radio" />
              <p className="inp_p">Offline Payment</p>
            </div>
          </div>

          <button className="priceBtn" onClick={() => handleEmptyCart()} >₹ {totalprice}</button>
        </div>
      </div>

      {/* right */}
      <div className="right">
        <div>
          <div className="mainDiv" style={{ width: "100%" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "32px 0px 20px 32px",
              }}>
              Order Summary
            </h2>
            {carts.length > 0 &&
              carts.map((el) => {
                return <Checkout key={el.id} {...el} />;
              })}

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "0 20px",
                boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}>
              <div style={{ width: "20%" }}>
                <img src="https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07228-1YP900_1_lar.jpg" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}>
                <p>Graceful Twines Diamond Ring| Size: 12</p>
                <p>SKU: JR07228-1YP900</p>
                <p>Expected Delivery - 23rd May</p>
              </div>
              <div style={{ margin: "60px 10px 10px 0px" }}>
                <p style={{ fontWeight: "bold" }}>₹ 37968</p>
                <p style={{ fontWeight: "bold", textAlign: "line-through" }}>
                  ₹ 42251
                </p>
              </div>
            </div> */}
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
              <p style={{ fontWeight: "bold" }} >
                {" "}
                ₹ {totalprice} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
