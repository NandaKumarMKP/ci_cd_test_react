import React, { Component } from "react";

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
  }
  nameHandler = (e) =>{
    this.setState({
        name: e.target.value
    })
  }
  emailHandler = (e) =>{
    this.setState({
        email: e.target.value
    })
  }

  submitHandler = () => {
    console.log("Name is" + this.state.name)
  }
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={this.state.name}
              onChange={this.nameHandler}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              id="name"
              value={this.state.email}
              onChange={this.emailHandler}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default BasicForm;
