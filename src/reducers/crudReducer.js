export default (state = [], action) => {
    switch (action.type) {
        case "ADD_CHAR": 
            return [...state, action.payload]
        case "UPDATE_CHAR":
            return state.map(element => element.Nome === action.payload.Nome ? action.payload : element);
        default:
            return state;
    }
}