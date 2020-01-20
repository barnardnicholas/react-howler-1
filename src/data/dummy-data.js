import crickets from "../components/sounds/crickets.ogg";
import swamp from "../components/sounds/Swamp.ogg";

export const channelList = [
  {
    name: "Swamp",
    key: "swamp",
    volume: 0.7,
    filepath: swamp,
    pan: 0.5,
    loop: true
  },
  {
    name: "Crickets",
    key: "crickets",
    volume: 0.7,
    filepath: crickets,
    pan: 0.5,
    loop: true
  }
];
