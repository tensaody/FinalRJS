import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducer/rootReducer";

const middleWare = [thunk]

export const centralStore = legacy_createStore(rootReducer, compose(applyMiddleware(...middleWare)))