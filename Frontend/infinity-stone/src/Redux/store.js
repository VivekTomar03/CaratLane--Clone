
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer/reducer";
import { reducer as productsReducer } from "./ProductReducer/reducer";
import {reducer as authReducer } from "./auth/auth.reducer"
const rootReducer = combineReducers({

    productsReducer, cartReducer , authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
