import React from "react";
import * as dummyData from "./data/dummy-data";
import "./App.css";
import Channel from "./components/Channel";

function App() {
  return (
    <div className="App">
      <ul>
        {dummyData.channelList.map(channel => {
          return (
            <li key={channel.key}>
              <Channel channel={channel} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
