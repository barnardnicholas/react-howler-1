import React, { Component } from "react";
import Sound from "./sounds/Sound";

class Channel extends Component {
  state = {
    name: "",
    key: "",
    filepath: "",
    playing: false,
    volume: 0.7,
    pan: 0.5,
    loop: true,
    mute: false
  };

  componentDidMount() {
    const { name, key, volume, filepath, pan } = this.props.channel;
    this.setState({
      name: name,
      key: key,
      volume: volume,
      filepath: filepath,
      pan: pan
    });
  }

  handlePlay = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  };

  handleMute = () => {
    const { mute } = this.state;
    this.setState({ mute: !mute });
  };

  handleVolumeChange = event => {
    const { value } = event.target;
    this.setState({ volume: value });
  };

  handlePanChange = (event, cb) => {
    const { value } = event.target;
    this.setState({ pan: value });
    // cb(value);
  };

  render() {
    const { name, filepath, playing, volume, pan, loop, mute } = this.state;
    return (
      <>
        <p>{name}</p>
        <button onClick={this.handlePlay}>Play/Pause</button>
        <button onClick={this.handleMute}>Mute</button>
        <label>
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={this.handleVolumeChange}
          ></input>
          {volume}
        </label>
        <label>
          Pan
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={pan}
            onChange={this.handlePanChange}
          ></input>
          {pan}
        </label>
        <Sound
          src={[filepath]}
          playing={playing}
          loop={loop}
          volume={volume}
          pan={pan}
          mute={mute}
        />
      </>
    );
  }
}

export default Channel;
