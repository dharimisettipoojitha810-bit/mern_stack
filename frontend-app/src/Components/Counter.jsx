import { Component } from "react";

export class Counter extends Component{

    constructor(){
        super();
        this.state={
        count:0,
        }
    }


    render(){
        return(
            <>
            <h1> Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState((pre)=>{
                    console.log(pre.count);


                    return {count:pre.count+1}
                })
            }}>Increment</button>
            <button onClick={()=>{
                this.setState((pre)=>{
                    console.log(pre.count);


                    return {count:pre.count-1}
                })
            }}>Decrement</button>

            <button onClick={()=>{
                this.setState(()=>{return {count:0}})
            }}>Reset</button>
            </>
        )
    }
}