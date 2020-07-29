import React from 'react';
import './App.css';
import APODContainer from "./components/APOD/APODContainer";
import {Provider} from "react-redux";
import store from "./redux/ReduxStore";

function App() {
    return (
        <div>
            <Provider store={store}>
                <APODContainer/>
            </Provider>
        </div>
    );
}

export default App;
