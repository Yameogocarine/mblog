

import React, { Component } from 'react';

 class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
      this.handleDecrement=this.handleDecrement.bind(this)
      this.handleIncrement=this.handleIncrement.bind(this)
    }
    handleDecrement =()=>{
       
        this.setState({count:this.state.count-1});
    }


    handleIncrement=()=>{
      
        this.setState({count:this.state.count+1});
    }
  


  render() {
    return (
      <div id="minuteur">
       <h1 id='label'>Minuteur</h1>
       <div id='count-value'>
       <button className='btn decrement'  onClick={this.handleDecrement}  >Decrementer</button>
       <h2>{this.state.count}</h2>
       <button className='btn increment' onClick={this.handleIncrement}  >Incrementer</button>
      </div>
      </div> 
    );
  }
}

export default App;

