const reducer = (state = 0, action) => {
    switch(action.type)
    {
        case "UPLOAD":
            return state + 1;
        default:
            return state;
    }
}

export default reducer;