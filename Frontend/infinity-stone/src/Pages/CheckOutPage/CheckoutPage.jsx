import React from "react";
import checkout from "../../ImageData/checkout.png";
import "../CheckOutPage/checkoutPage.css"
const CheckoutPage = () => {
  return (
    <div className="main">
      {/* left */}
      <div className="left">
        <h2>Select Payment Method</h2>

        <div>
          <img src={checkout} />
        </div>

        <div>
          <h2>Exchange Method</h2>
          <div>
            <input type="checkbox" name="" id="" />
            <p>Exchange Order</p>
          </div>

          <div>
            <div>
              <input type="radio" />
              <p>Credit Card</p>
            </div>
            <div>
              <input type="radio" />
              <p>Debit Card</p>
            </div>
            <div>
              <input type="radio" />
              <p>UPI</p>
            </div>
            <div>
              <input type="radio" />
              <p>Netbanking</p>
            </div>
            <div>
              <input type="radio" />
              <p>Offline Payment</p>
            </div>
          </div>

          <div>
            <button></button>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="seco"></div>
    </div>
  );
};

export default CheckoutPage;
