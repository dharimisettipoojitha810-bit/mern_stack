
import react from "react";
import { Component } from 'react';

class ClassBasedComponent extends Component{
  render(){
    return(
        <>
            <h1> ClassBasedComponent</h1>
            <p> This is classBasedComponent</p>
            <h3>Addition of 10 and 20 : {10+20}</h3>

        </>
    )
  }
}

export default ClassBasedComponent;