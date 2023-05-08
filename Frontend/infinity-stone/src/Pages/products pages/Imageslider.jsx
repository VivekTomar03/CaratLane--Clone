import React from 'react'
import { useState } from 'react'
import "./Styles.css"
import { NavLink } from 'react-router-dom'
import {AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";


const Imageslider = ({slides,slides1,slides2}) => {
    const [currentind,setIndex]=useState(0)


    const goprevious=(()=>{
        const firstind=currentind===0
        const newind=firstind?slides.length-1 :currentind-1
        setIndex(newind)
    })

    const gotonext=(()=>{
        const firstind=currentind===slides.length-1
        const newind=firstind?0 :currentind+1
        setIndex(newind)
    })
  return (
    <div className='slider1'>
        <div className='leftslide' onClick={goprevious}><AiFillCaretLeft/></div>
      
    

        
<div className='slidermain' style={{backgroundImage:`url(${slides[currentind].url})`}}></div>
<div className='slidermain' style={{backgroundImage:`url(${slides1[currentind].url})`}}></div>
<div className='slidermain' style={{backgroundImage:`url(${slides2[currentind].url})`}}></div>
<div className='rightslide' onClick={gotonext}><AiFillCaretRight/></div>
    </div>
  )
}

export default Imageslider
