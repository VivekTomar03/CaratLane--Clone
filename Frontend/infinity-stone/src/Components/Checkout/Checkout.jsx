import React from 'react'

const Checkout = ({imageurl,title,Size,price,originalprice}) => {

  return (
    // <div className='mainDiv'>
    //     <h2>Order Summary</h2>
    //     <div>
    //         <div>
    //             <img src={imageurl}/>
    //         </div>
    //         <div>
    //             <p>{title} | Size: {Size}</p>
    //             <p>SKU: JR07228-1YP900</p>
    //             <p>Expected Delivery - 23rd May{Date.now()}</p>
    //         </div>
    //         <div>
    //             <p>₹ {price}</p>
    //             <p style={{textDecoration:"line-through"}}>₹ {originalprice}</p>
    //         </div> 
    //     </div>
        
    // </div>
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
                  justifyContent: "space-around",
                }}>
                <p>{title} | Size: {Size}</p>
                <p>SKU: JR07228-1YP900</p>
                <p>Expected Delivery - 23rd May</p>
              </div>
              <div style={{ margin: "60px 10px 10px 0px" }}>
                <p style={{ fontWeight: "bold" }}>₹ {price}</p>
                <p style={{ fontWeight: "bold", textDecoration: "line-through" , color:"grey"}}>
                  ₹ {originalprice}
                </p>
              </div>
            </div> 
  )
}

export default Checkout