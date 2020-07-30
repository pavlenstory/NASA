import React from 'react';
import './App.css';
import APODContainer from "./components/APOD/APODContainer";
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";
import s from "./App.css"
import PhotoCollectionContainer from "./components/PhotoCollection/PhotoCollectionContainer";

function App() {
    return (
        <div className={s.AppWrapper}>
            <Provider store={store}>
                <APODContainer/>
                <PhotoCollectionContainer/>
            </Provider>
        </div>
    );
}

export default App;
