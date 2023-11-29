import {createStore} from "redux";
import {inputReducer} from "./Products.js";

export const store = createStore(inputReducer);

