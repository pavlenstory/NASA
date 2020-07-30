import React, {Component} from "react"
import {connect} from "react-redux";
import APOD from "./APOD";
import {getUPODurl} from "../../redux/apodReducer";
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css';


class APODContainer extends Component {

    componentDidMount() {
        this.props.getUPODurl("2020-07-30")
    }

    onChange = date => console.log(date);

    render() {
        return (
            <div>
                <APOD {...this.props}/>
                <Calendar onChange={this.onChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    APODurl: state.apodPage.APODurl
});

export default connect(mapStateToProps, {getUPODurl})(APODContainer)


