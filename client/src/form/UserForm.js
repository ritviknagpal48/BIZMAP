import React, { Component } from 'react';
import UserDetailSetOne from './UserDetailSetOne';
import UserDetailSetTwo from './UserDetailSetTwo';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
  state = {
    step: 1,
    field_one: '',
    field_two: '',
    field_three: '',
    field_four: '',
    field_five: '',
    field_six: '',
    field_seven: '',
    field_eight: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      field_one,
      field_two,
      field_three,
      field_four,
      field_five,
      field_six,
      field_seven,
      field_eight
    } = this.state;
    const values = {
      field_one,
      field_two,
      field_three,
      field_four,
      field_five,
      field_six,
      field_seven,
      field_eight
    };

    return (
      <UserDetailSetOne
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
    );
  }
}

export default UserForm;
