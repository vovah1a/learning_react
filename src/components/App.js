/*import React from 'react';
import './App.css';

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;*/

import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"  
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value }) 
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />  
                <textarea value={"Some default value"} /> 

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                
                <label>Favorite Color:</label>
                <select 
                  value={this.state.favColor}
                  onChange={this.handleChange}
                  name="favColor"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                </select>
                <h2><font color={this.state.favColor}>Your favorite color is {this.state.favColor}</font></h2>
            </form>
        )
    }
}

export default App