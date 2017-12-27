import React, {Component} from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import FormErrors from './FormErrors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work_planned: '',
      work_done: '',
      blocker: '',
      formErrors: {work_planned: '', work_done: '', blocker: ''},
      work_plannedValidate: false,
      work_doneValidate: false,
      blockerValidate: false,
      formValidate: false
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value},
      () => {this.validateField(name, value)}
    );
  }

  validateField(fieldName, value) {
    let fieldValidationError = this.state.formErrors;
    let work_plannedValidate = this.state.work_plannedValidate;
    let work_doneValidate = this.state.work_doneValidate;
    let blockerValidate = this.state.blockerValidate;

    switch(fieldName) {
      case 'Work_Planned':
        work_plannedValidate = value.length >= 0;
        fieldValidationError.work_plannedValidate = work_plannedValidate ? '' : 'Work plan is empty';
        break;
      case 'Work_Done':
        work_doneValidate = value.length >= 0;
        fieldValidationError.work_doneValidate = work_doneValidate ? '' : 'Work done is empty';
        break;
      case 'Blocker':
        blockerValidate = value.length >= 0;
        fieldValidationError.blockerValidate = blockerValidate ? '' : 'Blocker is empty';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationError,
      work_plannedValidate: work_plannedValidate,
      work_doneValidate: work_doneValidate,
      blockerValidate: blockerValidate,
    }, this.validateForm);
  }

  validateForm() {
    this.setState(
      {formValidate: this.state.work_plannedValidate && this.state.work_doneValidate && this.state.blockerValidate}
    );
  }


  render() {
    return(
      <div>
        <h2>Sign up page</h2>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div>
          <label>Work Planned</label>
          <TextField
            type='text'
            value={this.state.work_planned}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Work Done</label>
          <TextField
            type='text'
            value={this.state.work_done}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Blocker</label>
          <TextField
            type='text'
            value={this.state.blocker}
            onChange={this.handleChange}
          />
        </div>
        <Button type='submit' disabled={!this.state.formValidate}>
        Sign up</Button>
      </div>
    )
  }
}

export default App;
