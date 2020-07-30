import React, {Component} from "react"
import {connect} from "react-redux";
import APOD from "./APOD";
import {getUPODurl} from "../../redux/apodReducer";
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import s from "./APOD.module.css"

class APODContainer extends Component {

    componentDidMount() {
        if(localStorage.getItem('ADOPdate')) {
            this.props.getUPODurl(JSON.parse(localStorage.getItem('ADOPdate')))
        }else {this.props.getUPODurl("2020-07-30")}

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('ADOPdate', JSON.stringify(nextProps.ADOPdate))
    }

    onChange = date => {
        this.props.getUPODurl(`${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()}`);
    }

    render() {
        return (
            <div>
                <APOD {...this.props}/>
                <Calendar onChange={this.onChange} className={s.APODcaledar}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    APODurl: state.apodPage.APODurl,
    ADOPdate: state.apodPage.ADOPdate
});

export default connect(mapStateToProps, {getUPODurl})(APODContainer)


