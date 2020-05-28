

export const toggleModal = (e, employee) => dispatch => {
    e.preventDefault();
    
    dispatch({
        type: "TOGGLE_MODAL",
        payload: employee
    })
}
export const onCloseModal = () => dispatch => {
    dispatch({
        type: "ON_CLOSE_MODAL",
        payload: undefined
    })
}


