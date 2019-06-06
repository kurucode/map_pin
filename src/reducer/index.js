const initialState ={
    markers: []
  }

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "LOAD_EXCEL":
            return loadMarkers(state, action.payload)
        case "ADD_MARKER":
            return addMarker(state, action.payload)
        default:
            return state;
    }
}

function loadMarkers(state, markers) {
    return {
        ...state,
        markers: markers
    }
}

function addMarker(state, marker) {
    const markers = [...state.markers, marker]

    return {
        ...state,
        markers
    }
}

export default reducer;