import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./auth.type";

const BASE_URL = "https://red-worried-dove.cyclic.app"
const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};

const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};


export const login =(userData)=> async (dispatch)=>{
dispatch(loginRequestAction())

try {
    const res = await axios.post(`${BASE_URL}/users/login`,userData);
  console.log(res)
    if(res.data.msg==="Login Successfull" || "Welcome Admin"){
        dispatch(loginSuccessAction({token:res.data.token,email:userData.email, admin:res.data.admin}));
        return { "status": res.data.status, "msg": res.data.message };
    }else{
        dispatch(loginFailureAction());
      return { "status": res.data.status, "msg": res.data.message };
    }
} catch (error) {
    console.log(error);
    dispatch(loginFailureAction());
}
}