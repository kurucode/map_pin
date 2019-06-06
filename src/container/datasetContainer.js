import { connect } from 'react-redux'
import DataSet from '../component/dataset';

const mapStateToPros = (state) => {
    return {
        markers: state.markers
    };
};

export default connect(mapStateToPros)(DataSet)
