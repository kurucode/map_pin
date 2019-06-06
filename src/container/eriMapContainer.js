import { connect } from 'react-redux'
import EriMap from "../component/eriMap";

const mapStateToPros = (state) => {
    return {
        points: state.markers
    };
};

export default connect(mapStateToPros)(EriMap)
