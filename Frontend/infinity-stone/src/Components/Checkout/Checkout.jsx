import React from 'react'

const Checkout = ({imageurl,title,Size,price,originalprice}) => {
  return (
    <div className='mainDiv'>
        <h2>Order Summary</h2>
        <div>
            <div>
                <img src="https://cdn1.caratlane.com/media/catalog/product/cache/6/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07228-1YP900_1_lar.jpg"/>
            </div>
            <div>
                <p>Graceful Twines Diamond Ring| Size: 12</p>
                <p>SKU: JR07228-1YP900</p>
                <p>Expected Delivery - 23rd May{Date.now()}</p>
            </div>
            <div>
                <p>₹ 37968</p>
                <p>₹ 42251</p>
            </div> 
        </div>
        
    </div>
  )
}

export default Checkout