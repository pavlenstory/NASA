import {combineReducers, createStore} from "redux";
import apodReducer from "./apodReducer";


let reducers = combineReducers({
        apodPage: apodReducer,
    }
)

let store = createStore(reducers);

window.store = store;

export default store;