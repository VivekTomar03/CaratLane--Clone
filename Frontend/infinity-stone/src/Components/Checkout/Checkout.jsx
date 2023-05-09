import React from 'react'

const Checkout = ({imageurl,title,Size,price,originalprice,quantity}) => {

  return (
   
     <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "95%",
                margin: "10px 20px",
                boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}>
              <div style={{ width: "20%" }}>
                <img src={imageurl}/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  border: "0px solid red",
                  width:"60%"
                }}>
                <p>{title} | Size: {Size}</p>
                <p>Quantity: {quantity}</p>
                <p>SKU: JR07228-1YP900</p>
                <p>Expected Delivery - 23rd May</p>
              </div>
              <div style={{ margin: "60px 10px 10px 0px" }}>
                <p style={{ fontWeight: "bold" }}>₹ {price*quantity}</p>
                <p style={{ fontWeight: "bold", textDecoration: "line-through" , color:"grey"}}>
                  ₹ {originalprice*quantity}
                </p>
              </div>
            </div> 
  )
}

export default Checkout