import React, {Component} from "react"
import {connect} from "react-redux";
import APOD from "./APOD";


class APODContainer extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <APOD/>
        )
    }
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(APODContainer)


