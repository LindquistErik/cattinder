import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: '',
        picture: undefined
      },
      reset: {
        name: '',
        age: '',
        enjoys: '',
        picture: undefined
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
    this.props.handleNewCat(this.state.form)
    this.props.submitCat(this.state.form)
    this.setState({form: this.state.reset})
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <p>Create New Profile</p>
        <form onSubmit={this.submitForm.bind(this)}>
          <label id="name">Name</label>
            <FormControl
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
              required
            />
          <label id="age">Age</label>
            <FormControl
              type="number"
              name="age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
              required
            />
          <label id="enjoys">Enjoys</label>
            <FormControl
              type="text"
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
          <label id="picture">Picture</label>
            <FormControl
              type="text"
              name="picture"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.picture}
              placeholder="Enter image address to submit (ex. jpg, gif, png, etc.)"
            />
            <button type="submit">Submit Cat</button>
          </form>
          {this.props.success && <Redirect to="/cats" />}
      </div>
    );
  }
}

export default NewCat;
