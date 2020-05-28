import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import moment from "moment";
import "./employee.css";
import { connect } from 'react-redux';

class Employee extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { id } = this.props.match.params;
    const { employees } = this.props;

    let employee = {};
    for (let i = 0; i < employees.length; i++) {
      if (id === employees[i]._id) {
        employee = employees[i];
        break;
      }
    }

    let months = {};
    let days = {};
    if (employee.logins !== undefined) {
      employee.logins.forEach((login) => {
        const { date } = login;
        const month = moment(date).format("MMM");
        const day = moment(date).format("dddd");
        if (!months[month]) {
          months[month] = 1;
        } else {
          months[month]++;
        }
        if (!days[day]) {
          days[day] = 1;
        } else {
          days[day]++;
        }
      });
    }

    const data = Object.keys(days).map((day) => {
      const count = days[day];
      return { name: day, value: count };
    });

    const arr = Object.keys(months).map((month) => {
      const count = months[month];
      return { month, count };
    });

    const fullData = (
      <>
        <table className="table tsu">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
            </tr>
          </tbody>
        </table>
        <div className="chart-container">
          <div className="chart">
            <h3>Graph by Days</h3>
            <table className="table sm">
              <tbody>
                {Object.keys(days)
                  .sort((a, b) => days[a] - days[b])
                  .map((day, ind) => {
                    const count = days[day];
                    return (
                      <tr key={ind}>
                        <td>{day}</td>
                        <td>{count}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="chart">
            <PieChart width={500} height={650}>
              <Pie
                isAnimationActive={true}
                data={data}
                cx={200}
                cy={150}
                outerRadius={120}
                fill="#82ca9d"
                label
                dataKey="value"
              />
              <Tooltip />
            </PieChart>
          </div>
          <div className="chart-2">
            <h3>Graph by Month</h3>
            <table className="table sm">
              <tbody>
                {Object.keys(months)
                  .sort((a, b) => days[a] - days[b])
                  .map((month, ind) => {
                    const count = months[month];
                    return (
                      <tr key={ind}>
                        <td>{month}</td>
                        <td>{count}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="chart-2">
            <BarChart
              width={400}
              height={450}
              data={arr}
              margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </>
    );
    const error = <div className="err">This Employee Has Been Deleted</div>;
    // ----------------
    const content = employee.logins !== undefined ? fullData : error;
    return (
      <div className="single">
        <button
          onClick={this.goBack}
          type="button"
          className="btn btn-outline-dark"
        >{`Go Back`}</button>
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    employees: state.crudReducers.employees
  }
}

export default connect(mapStateToProps)(withRouter(Employee));
