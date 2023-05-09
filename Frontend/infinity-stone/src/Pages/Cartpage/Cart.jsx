import { Link, useNavigate } from "react-router-dom";
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
import { Spinner, useToast } from "@chakra-ui/react";
const Cart = () => {
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

  let totalQuantity=0;
  for (var i = 0; i < carts.length; i++) {
    totalQuantity =
    totalQuantity + carts[i].quantity  
  }

  function HandleCartDelete(id) {
    dispatch(deleteCartdata(id, token)).then(() => {
      dispatch(getCartProducts(token));
    });
  }

  return (
    <div>
      {carts.length === 0 ? (
        <EmptyCart />
      ) : (
        <div id="mainCart">
          <div id="cart" style={{ padding: "5px", margin: "25px" }}>
            <div id="cartimg">
              <img src={cart} />
            </div>
            <div className="total">
              <h4 style={{ fontWeight: "bold", margin: "10px" }}>
                Totol <span>({totalQuantity} Item)</span> :{" "}
                <span>₹ {totalprice}</span>
              </h4>
            </div>
            {carts.length > 0 &&
              carts.map((el) => {
                return (
                  <Cartmap
                    // setquantity={setquantity}
                    key={el._id}
                    {...el}
                    HandleCartDelete={() => HandleCartDelete(el._id)}
                  />
                );
              })}

            {/* left */}
          </div>
          <div id="bill" style={{ marginTop: "35px" }}>
            <div>
              <img style={{ height: "150px", width: "100%" }} src={rightCart} />
            </div>
            <h3>Order Summary</h3>
            <div className="billDetails">
              <div className="subtotalBill">
                <p>Subtotal</p>
                <p>₹ {totalOriginPrice}</p>
              </div>
              <div className="savedBill">
                <p>You Saved</p>
                <p style={{ color: "#c9b8fc" }}>- ₹ {totalSavePrice}</p>
              </div>
              <div className="deliveryBill">
                <p>Delivery Charge (Standard)</p>
                <p style={{ color: "#c9b8fc" }}>FREE</p>
              </div>
              <div className="totalBill">
                <h3>TOTAL COST</h3>
                <h3>₹ {totalprice}</h3>
              </div>
            </div>
            <div>
              <button
                className="CheckeoutBtn" 
               >
                <Link to={"/checkout"}> Checkeout Securely</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
