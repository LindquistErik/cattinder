import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      },
      reset: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event) {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
    }

  submitForm(e) {
    e.preventDefault()
    console.log("i submitted" + this.state.form.name)
    this.props.submitCat(this.state.form)
    this.setState({form: this.state.reset})
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <p>NewCat</p>
        <form onSubmit={this.submitForm.bind(this)}>
          <label id="name">Name</label>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
          <label id="age">Age</label>
            <FormControl
              type="number"
              name="age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />
          <label id="enjoys">Enjoys</label>
            <FormControl
              type="text"
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
            <button type="submit">Submit Cat</button>
          </form>
      </div>
    );
  }
}

export default NewCat;
