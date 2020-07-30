import React, {Component} from "react";
import PhotoCollection from "./PhotoCollection";
import {connect} from "react-redux";


class PhotoCollectionContainer extends Component {

    render() {
        return (
           <div>
               <PhotoCollection/>
           </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(PhotoCollectionContainer)
