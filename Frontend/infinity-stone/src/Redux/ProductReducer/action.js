import { REQUEST_STATE,SUCCESS_STATE,ERROR_STATE } from "./actionTypes";

import axios from "axios";


export const getProductsornaments2=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get("https://red-worried-dove.cyclic.app/earrings",obj).then((res)=>{
dispatch({type:SUCCESS_STATE,payload:res.data[0]})
    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}

export const getProductsornaments=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get("https://red-worried-dove.cyclic.app/rings",obj).then((res)=>{
        console.log(res)
dispatch({type:SUCCESS_STATE,payload:res.data[0]})

    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}