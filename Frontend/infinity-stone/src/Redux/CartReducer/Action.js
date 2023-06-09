
import {
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
} from "./ActionType";
import axios from "axios";


export const getCartProductsRequestAction = () => {
  return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
  return { type: GET_CART_FAILURE };
};

export const DeleteCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS };
};

export const getCartProducts = (token) => (dispatch) => {
 
  dispatch(getCartProductsRequestAction());
  return axios
    .get("https://cartlane.onrender.com/cart", {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res, "card data")
      dispatch(getCartProductsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getCartProductsFailureAction());
    });
};

export const deleteCartdata = (id,token) => (dispatch) => {
  dispatch(getCartProductsRequestAction());
  return axios
    .delete(`https://cartlane.onrender.com/cart/delete/${id}`, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then((res) => {
      dispatch(DeleteCartSuccess());
    })
    .catch((err) => {
      dispatch(getCartProductsFailureAction());
    });
};
