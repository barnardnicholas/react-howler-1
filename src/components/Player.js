import React, { Component } from "react";
import ReactHowler from "react-howler";
import jungleBird1 from "./sounds/Junglebird1.ogg";

class Player extends Component {
  state = {
    playing: false
  };

  handlePlay = () => {
    console.log("playing");
    this.setState({ playing: true });
  };

  handlePause = () => {
    this.setState({
      playing: false
    });
  };

  render() {
    return (
      <div>
        <ReactHowler src={[jungleBird1]} playing={this.state.playing} />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}

export default Player;
