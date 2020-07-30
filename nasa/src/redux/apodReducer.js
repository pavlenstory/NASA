import {apodAPI} from "../api/api";

let SET_APOD_URL = "apodReducer/SET_APOD_URL";

let initialState = {
    APODurl: "",
    ADOPdate: "",
}

const apodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD_URL:
            return {
                ...state,
                APODurl: action.APODurl,
                ADOPdate: action.ADOPdate
            }
        default:
            return state
    }
}

const setAPODurl = (APODurl, ADOPdate) => ({type: SET_APOD_URL, APODurl, ADOPdate});

export const getUPODurl = (date) => async (dispatch) => {
    let response = await apodAPI.getImage(date);
    dispatch(setAPODurl(response, date));
};

/*const setAPODdate = (APODdate) => ({type: SET_APOD_DATE, APODdate})*/


export default apodReducer;