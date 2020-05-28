import React, { Component } from "react";
import "./edit.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { editEmployee, onCloseModal } from "../../actions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  // TODO: handle this better 
  componentWillReceiveProps(props) {
    if (props.employee) {
      const { employee } = props;
      this.setState({ employee });
    }
  }

  onChange = (e) => {
    const employee = { ...this.state.employee };
    employee[e.target.name] = e.target.value;
    this.setState({ employee });
  };

  onSave = () => {
    const { employee } = this.state;
    this.props.editEmployee(employee);
    this.props.onCloseModal()
  };

  render() {

    const { first_name, last_name, email, city, state } = this.state.employee;
    const { editMode, onCloseModal } = this.props;

    return (
      <div>
        <Modal isOpen={editMode} toggle={onCloseModal}>
          <ModalHeader toggle={onCloseModal}>
            Edit{" "}
            <span style={{ color: "red" }}>
              {" "}
              {first_name} {last_name}{" "}
            </span>
          </ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label sm={2}>First</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => this.onChange(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Last</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>City</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>State</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="state"
                  value={state}
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
          </ModalBody>
          <div className="sc-btn">
            <Button onClick={this.onSave}>Save</Button>{" "}
            <Button onClick={onCloseModal}>Cancel</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editMode: state.modalReducers.editMode,
    employee: state.modalReducers.employee,
  };
};

export default connect(mapStateToProps, {
  editEmployee,
  onCloseModal,
})(Edit);
