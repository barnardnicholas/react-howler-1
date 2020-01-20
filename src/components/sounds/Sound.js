import React, { Component } from "react";
import ReactHowler from "react-howler";

class Sound extends Component {
  getVolume() {
    this.player.volume();
  }

  setVolume() {
    this.player.volume(0.5);
  }

  getPan() {
    this.player.stereo();
  }

  setPan() {
    this.player.stereo(0.1);
  }

  render() {
    const { src, playing, loop, volume, pan } = this.props;
    let volNumber = parseFloat(volume);
    let panNumber = parseFloat(pan);
    return (
      <ReactHowler
        src={src}
        playing={playing}
        loop={loop}
        volume={volNumber}
        stereo={panNumber}
        ref={ref => (this.player = ref)}
      />
    );
  }
}

export default Sound;