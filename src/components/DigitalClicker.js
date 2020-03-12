// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component{
  constructor(){
    super()
    this.state={
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    // event.persist()
    // console.log(event.target)
    this.setState(previousState=> {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    )
  }
}

export default DigitalClicker;




// In the components/DigitalClicker.js file, create a DigitalClicker React component.
//
// This component has an initial state property called timesClicked, which is initially defined as 0.
//
// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
//
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
//
// HINT: At the moment, src/index.js is trying to import DigitalClicker and the next component, YouTubeDebugger. To be able to see your progress as you build out DigitalClicker, you can comment out the second component by wrapping it in curly braces and comment indicators:
//
// {/*<YouTubeDebugger />*/}
// Don't forget to remove these before you begin building the second component!
