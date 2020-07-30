import {applyMiddleware, combineReducers, createStore} from "redux";
import apodReducer from "./apodReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
        apodPage: apodReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;