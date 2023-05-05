
import { cartReducer } from "./CartReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));