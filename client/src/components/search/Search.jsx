import { Link }  from 'react-router-dom';
import './search.css';
import React from 'react';
import { connect } from 'react-redux';
import { getSearchValue, getSearchBy } from '../../actions';

const Search = ({ search, getSearchValue, getSearchBy, searchBy }) => {

    return (
        <div className="search-bar">
            <div className="aud">
              <Link className='add-user' to='/new-employee'>ADD NEW EMPLOYEE</Link>
            </div>
            <input value={search} onChange={getSearchValue} className="search" placeholder="Search employee" />
            <select className="select" onChange={getSearchBy} value={searchBy}>
                <option value="">Select</option>
                <option value="first_name">firstName</option>
                <option value="last_name">lastName</option>
                <option value="email">Email</option>
                <option value="city">City</option>
                <option value="state">State</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        search: state.crudReducers.search,
        searchBy: state.crudReducers.searchBy
    }
}
export default connect(mapStateToProps, {getSearchValue, getSearchBy})(Search);