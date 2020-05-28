// TODO: use util functions to separate repeated code ex: function updateObject(oldObject, newValues) {}

const initalState = {
    employees: [],
    isLoading: true,
    errors: "",

    search: '',
    searchBy: '',

    sortBy: '',
    toggleOrder: false
}


export function crudReducers(state = initalState, { type, payload }) {

    switch (type) {
        case "LOAD_EMPLOYEES":
            return {
                ...state,
                employees: payload,
                isLoading: false
            }
        case "EMPLOYEES_LOAD_FAILED":
            return {
                ...state,
                // even tho it failed we should be able to see list of employees but just show an eror. not sure about this part
                isLoading: true,
                // ideally show this message in Error Component if we have
                errors: payload
            }
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [payload, ...state.employees],
                isLoading: false
            }
        case "ADD_EMPLOYEE_FAILED":
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case "EDIT_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.map(el => {
                          if (el.id === payload.id) {
                            return payload
                          }
                          return el
                        }),
                isLoading: false,
            }
        case "EDIT_EMPLOYEE_FAILED":
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(el => el._id !== payload._id),
                isLoading: false,
            }
        case "DELETE_EMPLOYEE_FAILED":
            return {
                ...state,
                isLoading: false,
                errors: payload
            }

        // split these default reducers
        case "SET_SORTBY":
            return {
                ...state,
                sortBy: payload,
                toggleOrder: !state.toggleOrder
            }
        case "GET_SEARCH_VALUE":
            return {
                ...state,
                search: payload
            }
        case "GET_SEARCH_BY":
            return {
                ...state,
                searchBy: payload
            }
        default:
            return state;
    }
}
