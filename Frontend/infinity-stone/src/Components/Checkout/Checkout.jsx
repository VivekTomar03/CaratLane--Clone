import React from 'react'

const Checkout = ({imageurl,title,Size,price,originalprice}) => {
  return (
    <div className='mainDiv'>
        <h2>Order Summary</h2>
        <div>
            <div>
                <img src={imageurl}/>
            </div>
            <div>
                <p>{title} | Size: {Size}</p>
                <p>SKU: JR07228-1YP900</p>
                <p>{Date.now()}</p>
            </div>
            <div>
                <p>₹ {price}</p>
                <p>₹ {originalprice}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Checkout