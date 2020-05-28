// Action creators

const baseUrl = 'http://localhost:5000/'

// get all employees
export const getData = () => dispatch => {

    fetch(`${baseUrl}api/employees`)
        .then(response => response.json())
        .then(employees => {
             dispatch({
                type: "LOAD_EMPLOYEES",
                payload: employees
            })
        })
        .catch(err => {
            dispatch({
                type: "EMPLOYEES_LOAD_FAILED",
                payload: err.message
            })
        })
}

// add employee
export const addEmployee = (employee) => dispatch => {

    console.log("employee", employee);

    fetch(`${baseUrl}api/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
      })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "ADD_EMPLOYEE",
                payload: response 
            })
        })
        .catch(err => {
            dispatch({
                type: "ADD_EMPLOYEE_FAILED",
                payload: err.message
            })
    })
}

// edit employee
export const editEmployee = (employee) => dispatch => {

    fetch(`${baseUrl}api/employee/${employee._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
      })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "EDIT_EMPLOYEE",
                payload: response
            })
        })
        .catch(err => {
            dispatch({
                type: "EDIT_EMPLOYEE_FAILED",
                payload: err.message
            })
    })
}
// delete employee
export const deleteEmployee = (e, _id) => dispatch => {
    e.preventDefault();

    fetch(`${baseUrl}api/employee/${_id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "DELETE_EMPLOYEE",
                payload: response
            })
        })
        .catch(err => {
            dispatch({
                type: "DELETE_EMPLOYEE_FAILED",
                payload: err.message
            })
    })
}


// ----------- 
// TODO: dispatch needed
// don't think we will have errors but good to handle it for any case
export const setSortBy = (value) => dispatch => {
    dispatch({
        type: "SET_SORTBY",
        payload: value
    })
}

export const getSearchValue = (e) => dispatch => {
    dispatch({
        type: "GET_SEARCH_VALUE",
        payload: e.target.value
    })
}
export const getSearchBy = (e) => dispatch => {
    dispatch({
        type: "GET_SEARCH_BY",
        payload: e.target.value
    })
}

