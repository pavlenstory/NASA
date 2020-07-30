import React from "react"
import s from "./APOD.module.css"

function APOD(props) {
    return (
        <div>
            <img src={props.APODurl} className={s.APODimg} alt="cosmos"/>
        </div>
    )
}


export default APOD;
