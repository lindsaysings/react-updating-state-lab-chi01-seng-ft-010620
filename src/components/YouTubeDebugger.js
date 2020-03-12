// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component{
  constructor(){
    super()
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateButton = (event) => {
    // console.log(event)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionButton = (event) => {
    // console.log(event.clientX, event.clientY)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: "720p"
        }
      }
    })
  }


  render(){
    return(
      <div>
        <button onClick={this.handleBitrateButton} className="bitrate" >Bitrate</button>
        <button onClick={this.handleResolutionButton} className="resolution">Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;


// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
//
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
