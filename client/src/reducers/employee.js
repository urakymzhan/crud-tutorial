
const initialState = {
    editMode: false,
    employee: {}
}

export function modalReducers(state=initialState, action) {
    const { type, payload }  = action;

    switch(type) {
        case "TOGGLE_MODAL":
            return {
                ...state,
                employee: payload,
                editMode: !state.editMode
            }
        case "ON_CLOSE_MODAL":
            return {
                ...state,
                editMode: !state.editMode
            }
        default:
            return state;
    }
}