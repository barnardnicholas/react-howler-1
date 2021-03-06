import React, { Component } from "react";
import ReactHowler from "react-howler";

class Sound extends Component {
  render() {
    const { src, playing, loop, volume, pan, mute } = this.props;
    let volNumber = parseFloat(volume);
    let panNumber = parseFloat(pan);
    return (
      <ReactHowler
        src={src}
        playing={playing}
        loop={loop}
        volume={volNumber}
        stereo={panNumber}
        mute={mute}
        ref={ref => (this.player = ref)}
      />
    );
  }
}

export default Sound;
