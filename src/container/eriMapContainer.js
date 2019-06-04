import { connect } from 'react-redux'
import EriMap from "../component/eriMap";
import {upload} from '../actions'

const mapStateToPros = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        upload: () => dispatch(upload()),
    };
};

export default connect(mapStateToPros, mapDispatchToPros)(EriMap)
