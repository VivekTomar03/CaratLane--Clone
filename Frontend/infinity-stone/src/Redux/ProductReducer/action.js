import { REQUEST_STATE,SUCCESS_STATE,ERROR_STATE } from "./actionTypes";

import axios from "axios";


export const getProductsornaments2=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get(" http://localhost:8088/mens",obj).then((res)=>{
dispatch({type:SUCCESS_STATE,payload:res.data})
    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}

export const getProductsornaments=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_STATE})
    axios.get("https://red-worried-dove.cyclic.app/rings",obj).then((res)=>{
        console.log(res)
dispatch({type:SUCCESS_STATE,payload:res.data})

    }).catch(()=>
        dispatch({type:ERROR_STATE})
    )
}