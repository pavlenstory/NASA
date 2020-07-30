import {apodAPI} from "../api/api";

let SET_APOD_URL = "apodReducer/SET_APOD_URL";

let initialState = {
    APODurl: "",
}

const apodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD_URL:
            return {
                ...state,
                APODurl: action.APODurl
            }
        default:
            return state
    }
}

const setAPODurl = (APODurl) => ({type: SET_APOD_URL, APODurl});

export const getUPODurl = (date) => async (dispatch) => {
    let response = await apodAPI.getImage(date);
    dispatch(setAPODurl(response));
};


export default apodReducer;