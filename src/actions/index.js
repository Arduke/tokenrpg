export const AddChar = (Char = {}) => {
    return {
        type: "ADD_CHAR",
        payload: Char,
    }
}

export const SelectChar = (Char = {}) => {
    return {
        type: "SELECT_CHAR",
        payload:Char,
    }
}

export const UpdateChar = (Char = {}) => {
    return {
        type: "UPDATE_CHAR",
        payload:Char,
    }
}

