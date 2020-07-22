export default (state = null, action) => {
    if (action.type === "SELECT_CHAR") {
        return action.payload;
    } else {
        return state;
    }
}