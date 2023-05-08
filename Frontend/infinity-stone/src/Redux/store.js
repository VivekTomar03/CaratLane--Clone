
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer/reducer";
import { reducer as productsReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({

    productsReducer, cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
