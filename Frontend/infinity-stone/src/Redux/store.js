import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as productsReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({

    productsReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));