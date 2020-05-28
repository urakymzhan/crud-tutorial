import React, { Component } from 'react';
import List from './components/list/List';
import Search from './components/search/Search';
import './App.css'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Employee from './components/employee/Employee.jsx';
import AddEmployee from './components/addemployee/AddEmployee.jsx';
import { getData, addEmployee, editEmployee, deleteEmployee } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    // spinner
    const loader = <div className="lds-dual-ring"></div>;
    // if loaded render List
    let content = this.props.isLoading ? loader : <List />;
    return (
      <React.Fragment>
        <div className='app'>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Redirect to="/page/1" />
              </Route>
              <Route path='/page/:page'>
                <Search />
                {content}
              </Route>
              <Route path='/employee/:id'>
                <Employee />
              </Route>
              <Route exact path='/new-employee/'>
                <AddEmployee />
              </Route>
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.crudReducers.employees,
    isLoading: state.crudReducers.isLoading,
    sortBy: state.crudReducers.sortBy,
    toggleOrder: state.crudReducers.toggleOrder,
  }
}
export default connect(mapStateToProps, { getData, addEmployee, editEmployee, deleteEmployee })(App);
