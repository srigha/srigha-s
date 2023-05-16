import './App.css';
import React, {Component} from 'react';

class Controlled extends React.Component{
  constructor(props){
    super(props);
    this.state={value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event){
    this.setState({value: event.target.value});
  }
  handleSubmit (event){
    alert('You have successfully submitted the input' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Controlled form Example</h2>
        <label>Name:<input type="text" ref={this.input}/></label>
        <br></br>
        <label>College Name:<input type="text" ref={this.input}/></label><br></br>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default Controlled;


